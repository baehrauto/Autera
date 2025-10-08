# Monday.com Integration Setup

## Step 1: Get Your Monday.com API Token

1. Go to [Monday.com Developer](https://auth.monday.com/users/sign_in_up)
2. Sign in to your Monday.com account
3. Go to **Admin** → **API** → **Developer**
4. Click **"Generate new token"**
5. Copy the generated token

## Step 2: Get Your Board ID

1. Open the Monday.com board where you want contact form submissions to appear
2. Look at the URL: `https://yourcompany.monday.com/boards/1234567890`
3. The number at the end (`1234567890`) is your Board ID

## Step 3: Set Up Environment Variables

Create a `.env.local` file in your project root with:

```env
MONDAY_API_TOKEN=your_api_token_here
MONDAY_BOARD_ID=your_board_id_here
```

## Step 4: Set Up Your Monday.com Board

Create columns in your board with these exact names:
- **Name** (Text column)
- **Email** (Email column) 
- **Company** (Text column)
- **Message** (Long text column)

## Step 5: Test the Integration

1. Restart your development server: `npm run dev`
2. Submit a test form on your contact page
3. Check your Monday.com board - a new item should appear!

## Troubleshooting

- Check the server console for any error messages
- Make sure your API token has the correct permissions
- Verify the board ID is correct
- Ensure column names match exactly (case-sensitive)


