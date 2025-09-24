'use client';

import Link from 'next/link'
import Logo from './Logo'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isAuthed, setIsAuthed] = useState(false)

  useEffect(() => {
    try {
      const flag = typeof window !== 'undefined' && localStorage.getItem('autera_auth') === 'true'
      setIsAuthed(!!flag)
      const handler = () => {
        const updated = localStorage.getItem('autera_auth') === 'true'
        setIsAuthed(updated)
      }
      window.addEventListener('storage', handler)
      return () => window.removeEventListener('storage', handler)
    } catch (_) {}
  }, [])

  const logout = () => {
    try {
      localStorage.removeItem('autera_auth')
      setIsAuthed(false)
      // Optionally redirect
      if (typeof window !== 'undefined') window.location.href = '/'
    } catch (_) {}
  }

  return (
    <nav className="fixed w-full z-50 bg-white/90 shadow-lg rounded-b-3xl border-b-2 border-blue-100 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-10 pt-2">
            {!isAuthed ? (
              <>
                <Link href="/solutions" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Solutions
                </Link>
                <Link href="/products" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Products
                </Link>
                <Link href="/partnerships" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Partnerships
                </Link>
                <Link href="/contact" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Contact
                </Link>
                <div className="flex items-center">
                  <Link 
                    href="/login" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-2xl text-base font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  >
                    Login
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link href="/dashboard" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Dashboard
                </Link>
                <Link href="/templates" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Templates
                </Link>
                <Link href="/settings" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Settings
                </Link>
                <button onClick={logout} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-2xl text-base font-bold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 