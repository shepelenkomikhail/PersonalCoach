import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="w-full aspect-square flex items-center justify-center"
    >
      <div className="diamond w-[85%] h-[85%] bg-surface flex items-center justify-center p-4">
        <div className="diamond-content text-center">
          <div className="flex flex-col items-center justify-center">
            {icon}
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-xs text-gray-400 hidden md:block">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;