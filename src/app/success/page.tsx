'use client';

import { useEffect, useState, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (!sessionId) {
      setStatus('error');
      return;
    }

    // Here you would typically verify the session with your backend
    // and update the user's subscription status
    setStatus('success');
  }, [sessionId]);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center bg-white rounded-3xl shadow-lg p-12 max-w-xl mx-auto">
          {status === 'loading' && (
            <>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <h1 className="mt-6 text-3xl font-extrabold text-gray-900 mb-4">
                Verifying your purchase...
              </h1>
            </>
          )}
          {status === 'success' && (
            <>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="mt-6 text-3xl font-extrabold text-gray-900 mb-4">
                Thank you for your purchase!
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                Your subscription has been activated. You can now access all the features of your plan.
              </p>
              <div className="mt-10">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl shadow-lg text-white bg-blue-600 hover:bg-blue-700"
                >
                  Go to Dashboard
                </Link>
              </div>
            </>
          )}
          {status === 'error' && (
            <>
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h1 className="mt-6 text-3xl font-extrabold text-gray-900 mb-4">
                Something went wrong
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                We couldn't verify your purchase. Please contact support if this issue persists.
              </p>
              <div className="mt-10">
                <Link
                  href="/partnerships"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl shadow-lg text-white bg-blue-600 hover:bg-blue-700"
                >
                  Return to Partnerships
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default function Success() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center bg-white rounded-3xl shadow-lg p-12 max-w-xl mx-auto">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <h1 className="mt-6 text-3xl font-extrabold text-gray-900 mb-4">
              Loading...
            </h1>
          </div>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
} 