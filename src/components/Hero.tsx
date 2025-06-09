import React from 'react';
import ServiceCard from './ServiceCard';
import { Dumbbell, Calendar, Video, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const services = [
    {
      icon: <Dumbbell className="h-8 w-8 mb-2" />,
      title: 'Био',
      description: 'Узнайте больше о моем опыте и подходе',
      link: "#about"
    },
    {
      icon: <Calendar className="h-8 w-8 mb-2" />,
      title: 'План тренировок',
      description: 'Индивидуальные программы для ваших целей',
      link: "#plans"
    },
    {
      icon: <Video className="h-8 w-8 mb-2" />,
      title: 'Онлайн тренировки',
      description: 'Тренируйтесь из любого места в любое время',
      link: "#plans"
    },
    {
      icon: <Users className="h-8 w-8 mb-2" />,
      title: 'Закрытый канал',
      description: 'Эксклюзивный контент для подписчиков',
      link: "#contact"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className=" rounded-md overflow-hidden px-4">
              {/* Image will be here */}
              <div className="w-full h-full rounded-t-md flex items-center justify-center text-gray-400 opacity-80">
                <img src="/IMG_0269.JPG" alt="" style={{ borderRadius: '10px' }} />
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
              Форма, которой ты будешь гордиться
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 mb-8 hidden lg:block"
            >
              Индивидуальные планы тренировок и питания, разработанные персонально под твою цель.
              Результат — не случайность, а система.
            </motion.p>
            
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.1}
                  link={service.link}
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
                ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ -{'>'}
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