import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {trainingPlans} from "../../info/trainingPlans.ts";
import InfoDialog from "../InfoDialog.tsx";
import PayButton from "../PayButton.tsx";

interface TrainingPlanProps {
  title: string;
  description: string;
  features: string[];
  price: number;
  popular?: boolean;
  delay?: number;
  img: string;
  onMoreInfoClick?: () => void;
}

const TrainingPlan: React.FC<TrainingPlanProps> = ({ title, description, features, price, img, popular = false, delay = 0, onMoreInfoClick }) => {
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

      <div className="h-40 w-full rounded mb-4 flex items-center justify-center overflow-hidden">
        <img src={img} className={"w-full"}/>
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
        <span className="text-xl font-bold">{price} €</span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm underline"
          onClick={onMoreInfoClick}
        >
          <span> Подробнее </span>
        </motion.button>
      </div>

      <PayButton text={"КУПИТЬ"} popular={true} amount={price} description={description} />
    </motion.div>
  );
};

const OnlineTraining: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <section id="online" className="section-padding relative overflow-hidden bg-[rgb(18,18,18)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Тренируйся со мной из любой точки мира.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Покупаешь план — получаешь систему: тренировки, питание, поддержка, обратная связь.
            Ты не просто скачиваешь файл — ты начинаешь работать с тренером.
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
              img={plan.img}
              onMoreInfoClick={() => setShowDialog(true)}
            />
          ))}
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute -z-10 bottom-0 left-1/4 w-64 h-64 bg-tertiary rounded-full opacity-10 blur-3xl"></div>

      {showDialog && (
        <InfoDialog setShowDialog={setShowDialog} />
      )}
    </section>
  );
};

export default OnlineTraining;