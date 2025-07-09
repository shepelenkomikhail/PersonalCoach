import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black py-10 border-t border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-0 md:mb-0">
            <a href="#" className="text-xl font-bold">{t('footer.brand')}</a>
            <p className="text-gray-400 text-sm mt-2">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="flex md:flex-col gap-4 md:gap-0 items-center md:items-end">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center mb-0 md:mb-4 hover:bg-surface transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;