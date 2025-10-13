'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar'

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    // Test credentials
    if (email === 'demo@autera.com' && password === 'autera123') {
      try { localStorage.setItem('autera_auth', 'true'); } catch (_) {}
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <main>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-20 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900 mb-4">
            Access Your Partnership Portal
          </h2>
          <p className="mt-2 text-center text-lg text-gray-700 mb-8">
            Reserved for qualified companies only
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-10 px-8 shadow-lg rounded-2xl sm:px-12">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-700 mb-2">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-600 focus:border-blue-600 text-lg"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-base font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-600 focus:border-blue-600 text-lg"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-base text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-base">
                  <Link href="/forgot-password" className="font-bold text-blue-600 hover:text-blue-700">
                    Forgot your password?
                  </Link>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-base text-center">{error}</div>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-4 px-4 border border-transparent rounded-2xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-cyan-500/25"
                >
                  Access Portal
                </button>
              </div>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-base">
                  <span className="px-2 bg-white text-gray-500">Demo Access</span>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-3">
                <div className="text-base text-center text-gray-700">
                  <p>Email: demo@autera.com</p>
                  <p>Password: autera123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 