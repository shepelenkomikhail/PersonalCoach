import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface TrainingPlanProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  delay?: number;
}

const TrainingPlan: React.FC<TrainingPlanProps> = ({ title, description, features, price, popular = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`bg-surface p-6 rounded-lg relative ${popular ? 'border border-white/20' : ''}`}
    >
      {popular && (
        <div className="absolute -top-3 right-6 bg-white text-black text-xs font-semibold py-1 px-3 rounded-full">
          ПОПУЛЯРНЫЙ
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      
      <div className="h-40 bg-tertiary rounded mb-4 flex items-center justify-center">
        <span className="text-gray-500 text-sm">Фото тренировки</span>
      </div>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-300 text-sm flex items-start">
            <span className="w-1.5 h-1.5 bg-white inline-block mr-2 mt-1.5"></span>
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-xl font-bold">{price}</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm underline"
        >
          Подробнее
        </motion.button>
      </div>
      
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full py-2.5 rounded ${popular ? 'bg-white text-black' : 'border border-white text-white'} flex items-center justify-center`}
      >
        <span>КУПИТЬ</span>
        <ArrowRight className="ml-2 w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

const OnlineTraining: React.FC = () => {
  const trainingPlans = [
    {
      title: "ПЛАН 1",
      description: "Похудение и сушка",
      price: "4990 ₽",
      features: [
        "12 тренировок",
        "План питания",
        "Видеоматериалы",
        "Чат поддержки"
      ],
      popular: true
    },
    {
      title: "ПЛАН 2",
      description: "Набор мышечной массы",
      price: "5990 ₽",
      features: [
        "16 тренировок",
        "План питания",
        "Видеоматериалы",
        "Чат поддержки"
      ]
    },
    {
      title: "ПЛАН 3",
      description: "Функциональный тренинг",
      price: "4490 ₽",
      features: [
        "10 тренировок",
        "План питания",
        "Видеоматериалы",
        "Чат поддержки"
      ]
    }
  ];

  return (
    <section id="online" className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ОНЛАЙН ТРЕНИРОВКИ</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Тренируйтесь в удобное время из любого места под моим профессиональным руководством
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingPlans.map((plan, index) => (
            <TrainingPlan
              key={index}
              title={plan.title}
              description={plan.description}
              features={plan.features}
              price={plan.price}
              popular={plan.popular}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 bottom-0 left-1/4 w-64 h-64 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default OnlineTraining;