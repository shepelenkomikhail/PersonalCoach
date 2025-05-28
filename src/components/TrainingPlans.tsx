import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart, Activity, TrendingUp } from 'lucide-react';

const TrainingPlans: React.FC = () => {
  return (
    <section id="plans" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ПЛАНЫ ТРЕНИРОВОК</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Выберите подходящий для вас план тренировок и начните свой путь к идеальной форме
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ready-made plan */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-surface p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Готовый план</h3>
            <p className="text-gray-400 mb-6">
              Выбери свою цель и получи готовый план тренировок прямо сейчас!
            </p>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-24 h-24 bg-tertiary rounded-lg flex items-center justify-center">
                <BarChart className="w-10 h-10 text-white opacity-80" />
              </div>
              <div className="flex-1">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                    СБРОС ВЕСА
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                    НАБОР МАССЫ
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                    ПОДДЕРЖАНИЕ ФОРМЫ
                  </li>
                </ul>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary flex items-center justify-center mx-auto"
            >
              <span>ПОЛУЧИТЬ</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>
          
          {/* Individual plan */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Индивидуальный план</h3>
            <p className="text-gray-400 mb-6">
              БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ и детальная проработка плана под ваши цели
            </p>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-24 h-24 bg-tertiary rounded-lg flex items-center justify-center">
                <Activity className="w-10 h-10 text-white opacity-80" />
              </div>
              <div className="flex-1">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                    Анализ физической формы
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                    Персональная программа
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                    Регулярные корректировки
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-white inline-block mr-2"></span>
                    Поддержка 24/7
                  </li>
                </ul>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline flex items-center justify-center mx-auto"
            >
              <span>ЗАПОЛНИТЬ АНКЕТУ</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 top-1/4 -left-40 w-80 h-80 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -z-10 bottom-1/4 -right-40 w-80 h-80 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default TrainingPlans;