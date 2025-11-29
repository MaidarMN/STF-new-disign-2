import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Нүүр', href: '#' }, // Home
  { label: 'Бидний тухай', href: '#about' }, // About Us
  { label: 'Төсөл хөтөлбөр', href: '#projects' }, // Projects
  { label: 'Мэдээ мэдээлэл', href: '#news' }, // News
  { label: 'Хууль эрх зүй', href: '#laws' }, // Laws/Regulations
  { label: 'Холбоо барих', href: '#contact' }, // Contact
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
            S
          </div>
          <div className={`flex flex-col ${isScrolled ? 'text-slate-800' : 'text-slate-800 lg:text-white'}`}>
            <span className="font-bold text-sm md:text-base leading-tight">ШИНЖЛЭХ УХААН,</span>
            <span className="text-xs md:text-sm leading-tight opacity-90">ТЕХНОЛОГИЙН САН</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Utilities */}
        <div className="hidden lg:flex items-center space-x-4">
            <button className={`${isScrolled ? 'text-slate-600' : 'text-white'} hover:opacity-75`}>
                <Search size={20} />
            </button>
            <button className={`flex items-center space-x-1 ${isScrolled ? 'text-slate-600' : 'text-white'} hover:opacity-75`}>
                <Globe size={20} />
                <span className="text-xs font-bold">MN</span>
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
               Нэвтрэх
            </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t p-4 lg:hidden flex flex-col space-y-4 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-700 font-medium py-2 hover:text-blue-600 block border-b border-slate-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            <button className="flex-1 bg-slate-100 text-slate-700 py-2 rounded-lg">Хайх</button>
            <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">Нэвтрэх</button>
          </div>
        </div>
      )}
    </header>
  );
};