import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-[rgb(18,18,18)]">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('about.name')}</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">{t('about.workWith')}</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white inline-block mr-3"></span>
                  {t('about.goals.weightLoss')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white inline-block mr-3"></span>
                  {t('about.goals.gainMass')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white inline-block mr-3"></span>
                  {t('about.goals.recovery')}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white inline-block mr-3"></span>
                  {t('about.goals.returnForm')}
                </li>
              </ul>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline mt-8"
            >
              <a href="https://t.me/masiiania" target={"_blank"}>
                {t('about.learnMore')} {'->'}
              </a>
            </motion.button>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-[4/5] rounded-md overflow-hidden"
            >
              {/* Trainer image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <img src="/IMG_0207.JPG" alt="" className="rounded-md mb-5 opacity-80 h-[500px] md:h-[700px]" />
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-tertiary rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -z-10 top-1/4 -right-10 w-32 h-32 bg-tertiary rounded-full opacity-20 blur-2xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;