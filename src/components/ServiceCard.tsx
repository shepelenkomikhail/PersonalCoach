import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode,
  title: string,
  description: string,
  delay: number,
  link: string,
  mobileVersion?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({icon, title, description, delay, link, mobileVersion = false}) => {
  return (
      <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.4, delay}}
          className={`w-full ${mobileVersion ? 'p-1.5' : 'p-3'}`}
      >
        <a href={link}>
          <div className={`
                    bg-surface rounded-xl shadow-md hover:shadow-lg opacity-90
                    hover:opacity-100 hover:bg-tertiary hover:scale-105 hover:translate-y-[-5px]
                    hover:translate-x-[5px] hover:border-white/20
                    border border-transparent cursor-pointer
                    transition-all h-full flex flex-col items-center text-center
                    ${mobileVersion ?
              'p-3 w-full h-32' :
              'p-6 w-64 h-48'}
                `}>
            <div className={`${mobileVersion ? 'text-xl mb-2' : 'text-3xl mb-4'}`}>
              {React.cloneElement(icon as React.ReactElement, {
                className: `${mobileVersion ? 'h-6 w-6' : 'h-8 w-8'} ${(icon as React.ReactElement).props.className}`
              })}
            </div>
            <h3 className={`font-semibold ${mobileVersion ? 'text-base mb-1' : 'text-lg mb-2'}`}>
              {title}
            </h3>
            <p className={`${mobileVersion ? 'text-xs' : 'text-sm'} text-gray-400`}>
              {description}
            </p>
          </div>
        </a>
      </motion.div>
  );
};

export default ServiceCard;