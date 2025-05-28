import React from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">СВЯЗАТЬСЯ СО МНОЙ</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Остались вопросы? Напишите мне, и я отвечу в ближайшее время
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-tertiary border-0 rounded p-3 text-white focus:ring-1 focus:ring-white"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-tertiary border-0 rounded p-3 text-white focus:ring-1 focus:ring-white"
                  placeholder="Введите ваш email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-tertiary border-0 rounded p-3 text-white focus:ring-1 focus:ring-white"
                  placeholder="Введите ваше сообщение"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn btn-primary flex items-center"
              >
                <span>Отправить</span>
                <Send className="ml-2 w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">Контактная информация</h3>
              <p className="text-gray-400 mb-2">Email: maxim@manko-fitness.com</p>
              <p className="text-gray-400 mb-2">Телефон: +7 (999) 123-45-67</p>
              <p className="text-gray-400">Москва, Россия</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Часы работы</h3>
              <p className="text-gray-400 mb-2">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-gray-400">Сб-Вс: 10:00 - 18:00</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center"
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="#"
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 -bottom-20 -right-20 w-72 h-72 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default Contact;