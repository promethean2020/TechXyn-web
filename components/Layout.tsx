'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Particles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      className="absolute w-0.5 h-0.5 bg-cyan-400 rounded-full opacity-60 animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${Math.random() * 3 + 3}s`
      }}
    />
  ));
  return <div className="fixed inset-0 pointer-events-none z-0">{particles}</div>;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-xl' : 'bg-slate-900/80 backdrop-blur-lg'
    } border-b border-cyan-400/20`}>
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          TechXYN
        </Link>
        <ul className="hidden md:flex space-x-8">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative font-medium transition-all duration-300 hover:text-cyan-400 hover:-translate-y-0.5 ${
                  pathname === href ? 'text-cyan-400' : 'text-white'
                }`}
              >
                {label}
                {pathname === href && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-black/30 border-t border-cyan-400/20 py-8">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">
          © 2025 TechXYN Solutions. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-cyan-400 hover:text-purple-400 transition-colors duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-cyan-400 hover:text-purple-400 transition-colors duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-cyan-400 hover:text-purple-400 transition-colors duration-300">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative">
      <Particles />
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Layout;  
