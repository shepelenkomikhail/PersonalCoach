import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, link }) => {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay }}
          className="w-full sm:w-1/2 lg:w-1/4 p-3"
      >
        <a href={link}>
          <div className="bg-surface rounded-xl p-6 shadow-md hover:shadow-lg opacity-90
            hover:opacity-100  hover:bg-tertiary  hover:scale-105  hover:translate-y-[-5px]
            hover:translate-x-[5px]hover:border-white/20
            border border-transparent  cursor-pointer
                    transition-all h-full w-64 flex flex-col items-center text-center"
          >
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </a>
      </motion.div>
  );
};

export default ServiceCard;