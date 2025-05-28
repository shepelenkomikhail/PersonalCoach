import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">МАКСИМ МАНЬКО</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Сертифицированный персональный тренер с более чем 10-летним опытом работы. 
              Специализируюсь на функциональных тренировках, силовом тренинге и коррекции 
              фигуры. Индивидуальный подход к каждому клиенту — ключ к достижению ваших 
              целей в фитнесе.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Специализация</h3>
              <ul className="text-gray-400 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white inline-block mr-3"></span>
                  Снижение веса и коррекция фигуры
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white inline-block mr-3"></span>
                  Набор мышечной массы
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white inline-block mr-3"></span>
                  Функциональные тренировки
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-white inline-block mr-3"></span>
                  Реабилитация после травм
                </li>
              </ul>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline mt-8"
            >
              Узнать больше
            </motion.button>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-[4/5] bg-tertiary rounded-md overflow-hidden"
            >
              {/* Trainer image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 bg-surface">
                <span className="text-sm">Фото тренера в спортзале</span>
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