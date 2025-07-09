import React from 'react';
import ServiceCard from '../ServiceCard.tsx';
import { Dumbbell, Calendar, Video, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Dumbbell className="h-8 w-8 mb-2" />,
      title: t('hero.services.bio.title'),
      description: t('hero.services.bio.description'),
      link: "#about"
    },
    {
      icon: <Calendar className="h-8 w-8 mb-2" />,
      title: t('hero.services.plans.title'),
      description: t('hero.services.plans.description'),
      link: "#plans"
    },
    {
      icon: <Video className="h-8 w-8 mb-2" />,
      title: t('hero.services.online.title'),
      description: t('hero.services.online.description'),
      link: "#online"
    },
    {
      icon: <Users className="h-8 w-8 mb-2" />,
      title: t('hero.services.channel.title'),
      description: t('hero.services.channel.description'),
      link: "#contact"
    }
  ];

  return (
      <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden mb-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 mt-20 items-center">
            {/* Мобильный заголовок и описание */}
            <div className="lg:hidden mb-6 text-center px-4">
              <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold mb-4"
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-400"
              >
                {t('hero.description')}
              </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 order-1 lg:order-none"
            >
              <div className="rounded-md overflow-hidden px-4">
                <div className="w-full h-full rounded-t-md flex items-center justify-center">
                  {/* Разные изображения для разных экранов */}
                  <picture>
                    <source media="(max-width: 1023px)" srcSet="/img_3.png" />
                    <source media="(min-width: 1024px)" srcSet="/IMG_0269.JPG" />
                    <img
                        src="/IMG_0269.JPG"
                        alt="Фитнес тренер"
                        className="rounded-md mb-5 w-full h-auto object-cover max-h-[400px] lg:max-h-[700px]"
                    />
                  </picture>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-6 order-2 lg:order-none">
              {/* Десктопный заголовок и описание */}
              <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-6 hidden lg:block"
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-400 mb-8 hidden lg:block"
              >
                {t('hero.descriptionFull')}
              </motion.p>

              {/* Карточки сервисов - теперь всегда 2x2 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        description={service.description}
                        delay={index * 0.1}
                        link={service.link}
                        // Добавляем пропс для мобильной версии
                        mobileVersion={true}
                    />
                ))}
              </div>

              <div className="mt-6 lg:mt-8 flex justify-center lg:justify-start">
                <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    href="#contact"
                    className="btn btn-primary mx-2 py-2 px-3 text-sm md:py-3 md:px-4 lg:py-4 lg:px-6 lg:text-base"
                >
                  {t('hero.getConsultation')} -{'>'}
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute -z-10 -bottom-16 -right-16 w-64 h-64 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -z-10 top-20 -left-16 w-48 h-48 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
      </section>
  );
};

export default Hero;