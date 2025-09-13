'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const navLinks = [
    { title: 'Practice', href: '/pages/practice' },
    { title: 'Scripts', href: '/pages/scripts' },
    { title: 'Resources', href: '/pages/resources' },
    { title: 'Regulations', href: '/pages/regulations' },
    { title: 'Blog', href: '/pages/blog' },
    { title: 'Notes', href: '/pages/notes' },
    { title: 'Wiki', href: '/pages/wiki' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex pt-2 w-full items-center justify-between border-b-2 border-gray-400 bg-gray-200 shadow-lg fixed z-50">
      <div className=" flex flex-wrap flex-row items-center">
        <Link
          className="  ml-2 sm:ml-22 font-bold text-2xl rounded-lg text-gray-500 hover:text-gray-800 transition-all duration-200 ease-in-out p-2"
          href="/"
        >
          DFIR
        </Link>
        <div className="flex flex-wrap items-center ml-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="font-bold text-sm text-gray-400 px-4 hover:text-gray-800 transition-all duration-200 ease-in-out hover:underline md:inline-block hidden"
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-8 h-8 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </button>
      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-200 border-b border-gray-300 shadow-lg z-50">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              className="block font-bold text-lg text-gray-400 px-4 py-3 hover:text-gray-800 transition-all duration-200 ease-in-out hover:bg-gray-300 border-b border-gray-300 last:border-b-0"
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}