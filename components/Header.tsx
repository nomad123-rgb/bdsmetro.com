import React, { useState, useEffect } from 'react';
import { Search, Menu, X, User } from 'lucide-react';
import { NewsTicker } from './NewsTicker';

interface HeaderProps {
  currentView: string;
  onViewChange: (view: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onViewChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'DASHBOARD', label: 'Overview' },
    { id: 'REPORTS', label: 'Intelligence' },
    { id: 'DATA', label: 'Data Terminal' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-200 flex flex-col`}
      >
        <div className={`w-full transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
                
                {/* 1. Brand Identity - Typographic Only (Luxury Standard) */}
                <div 
                    className="flex flex-col cursor-pointer group" 
                    onClick={() => onViewChange('DASHBOARD')}
                >
                    <h1 className="serif-font text-2xl md:text-3xl font-black tracking-tighter text-black leading-none group-hover:text-[#B45309] transition-colors">
                        BDS METRO<span className="text-[#B45309]">.</span>
                    </h1>
                    <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.3em] font-sans mt-1 ml-0.5">
                        Research Unit
                    </p>
                </div>

                {/* 2. Minimal Navigation */}
                <nav className="hidden md:flex items-center space-x-12">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onViewChange(item.id)}
                            className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors duration-200 relative group py-2 font-sans ${
                                currentView === item.id 
                                ? 'text-black border-b-2 border-black' 
                                : 'text-gray-400 hover:text-[#B45309]'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* 3. Utility - Simplified */}
                <div className="flex items-center space-x-6">
                    <button className="hidden sm:flex items-center space-x-2 text-black font-bold text-[10px] uppercase tracking-widest border border-gray-300 px-4 py-2 hover:bg-black hover:text-white transition-all rounded-sm">
                        <User className="w-3 h-3" />
                        <span>Client Login</span>
                    </button>

                    <button 
                        className="md:hidden text-black"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            </div>
        </div>

        {/* Integrated Ticker - Flush with header, creates the 'Terminal' look */}
        <NewsTicker />

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-4 animate-fade-in z-50">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            onViewChange(item.id);
                            setIsMobileMenuOpen(false);
                        }}
                        className={`text-left text-sm font-bold uppercase tracking-wider py-2 border-b border-gray-50 ${
                            currentView === item.id ? 'text-[#B45309]' : 'text-gray-600'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        )}
      </header>
      
      {/* Spacer matches header height + ticker */}
      <div className="h-[110px]"></div>
    </>
  );
};