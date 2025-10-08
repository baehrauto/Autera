import { NextRequest, NextResponse } from 'next/server';
import { ContactForm } from '@/lib/types';
import MondaySdk from 'monday-sdk-js';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message }: ContactForm = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString()
    });

    // Send to Monday.com if configured
    try {
      const mondayApiToken = process.env.MONDAY_API_TOKEN;
      const mondayBoardId = process.env.MONDAY_BOARD_ID;
      
      if (mondayApiToken && mondayBoardId) {
        const monday = MondaySdk({ token: mondayApiToken });
        
        // Create a new item in Monday.com
        const mutation = `
          mutation {
            create_item(
              board_id: ${mondayBoardId},
              item_name: "${name} - ${company || 'No Company'}",
              column_values: "{\\"text\\": \\"${name}\\", \\"email\\": {\\"email\\": \\"${email}\\", \\"text\\": \\"${email}\\"}, \\"text_1\\": \\"${company || 'N/A'}\\", \\"long_text\\": \\"${message.replace(/"/g, '\\"')}\\"}"
            ) {
              id
            }
          }
        `;
        
        const response = await monday.api(mutation);
        console.log('Monday.com item created:', response);
      } else {
        console.log('Monday.com integration not configured. Please set MONDAY_API_TOKEN and MONDAY_BOARD_ID environment variables.');
      }
    } catch (mondayError) {
      console.error('Monday.com integration error:', mondayError);
      // Don't fail the request if Monday.com integration fails
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We\'ll get back to you soon.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
