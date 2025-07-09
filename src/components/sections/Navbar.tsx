import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.plans'), href: '#plans' },
    { name: t('nav.online'), href: '#online' },
    { name: t('nav.feedbacks'), href: '#feedbacks' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-bold">MAKS FITNESS</a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <a href="#online" className="hidden md:block btn btn-outline">
            {t('nav.train')}
          </a>

          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black absolute top-full left-0 w-full">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="btn btn-outline self-start">
              {t('nav.train')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;