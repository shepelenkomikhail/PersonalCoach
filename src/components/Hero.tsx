import React from 'react';
import ServiceCard from './ServiceCard';
import { Dumbbell, Calendar, Video, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const services = [
    {
      icon: <Dumbbell className="h-8 w-8 mb-2" />,
      title: 'Био',
      description: 'Узнайте больше о моем опыте и подходе'
    },
    {
      icon: <Calendar className="h-8 w-8 mb-2" />,
      title: 'План тренировок',
      description: 'Индивидуальные программы для ваших целей'
    },
    {
      icon: <Video className="h-8 w-8 mb-2" />,
      title: 'Онлайн тренировки',
      description: 'Тренируйтесь из любого места в любое время'
    },
    {
      icon: <Users className="h-8 w-8 mb-2" />,
      title: 'Закрытый канал',
      description: 'Эксклюзивный контент для подписчиков'
    }
  ];

  return (
    <section id="home" className="min-h-screen pt-20 flex flex-col justify-center relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="aspect-[3/4] bg-tertiary rounded-md overflow-hidden">
              {/* Image will be here */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Фото тренера
              </div>
            </div>
          </motion.div>
          
          <div className="lg:col-span-6">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 hidden lg:block"
            >
              МАКСИМ МАНЬКО
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 mb-8 hidden lg:block"
            >
              Персональный фитнес тренер, который поможет вам достичь ваших целей через индивидуальный подход и профессиональное сопровождение.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            <div className="mt-8 flex justify-center lg:justify-start">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                href="#contact"
                className="btn btn-primary mx-2"
              >
                Связаться
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                href="#plans"
                className="btn btn-outline mx-2"
              >
                Программы
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