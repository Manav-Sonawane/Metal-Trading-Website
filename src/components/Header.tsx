import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', value: 'home' },
    { label: 'Products', value: 'products' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' }
  ];

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white">SP</span>
            </div>
            <span className="text-xl tracking-tight">SteelPro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => onNavigate(link.value)}
                className={`hover:text-blue-400 transition-colors ${
                  currentPage === link.value ? 'text-blue-400' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => {
                  onNavigate(link.value);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 px-4 hover:bg-slate-800 rounded ${
                  currentPage === link.value ? 'text-blue-400 bg-slate-800' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
