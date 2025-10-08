'use client';

import Link from 'next/link'
import Logo from './Logo'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isAuthed, setIsAuthed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 p-2 rounded-lg"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
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
                <Link href="/portfolio" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Portfolio
                </Link>
                <Link href="/contact" className="text-gray-900 font-semibold text-base hover:text-blue-600 transition-colors px-2 py-1 rounded-xl hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
                  Contact
                </Link>
                <div className="flex items-center">
                  <Link 
                    href="/contact" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-2xl text-base font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  >
                    Book a Call
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

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-100 rounded-b-3xl shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {!isAuthed ? (
                <>
                  <Link 
                    href="/solutions" 
                    className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Solutions
                  </Link>
                  <Link 
                    href="/products" 
                    className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <Link 
                    href="/partnerships" 
                    className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Partnerships
                  </Link>
                  <Link 
                    href="/portfolio" 
                    className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="pt-4">
                    <Link 
                      href="/contact" 
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book a Call
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    href="/dashboard" 
                    className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link 
                    href="/templates" 
                    className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Templates
                  </Link>
                  <Link 
                    href="/settings" 
                    className="block text-gray-900 font-semibold text-lg hover:text-blue-600 transition-colors px-4 py-3 rounded-xl hover:bg-blue-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <div className="pt-4">
                    <button 
                      onClick={() => {
                        logout();
                        setIsMobileMenuOpen(false);
                      }} 
                      className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-lg transition-all duration-200"
                    >
                      Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 