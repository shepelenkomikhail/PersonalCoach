import { useTranslation } from 'react-i18next';

export const useTrainingPlans = () => {
  const { t } = useTranslation();

  return [
    {
      title: t('onlineTraining.plans.solo.title'),
      description: t('onlineTraining.plans.solo.description'),
      price: 59,
      features: t('onlineTraining.plans.solo.features', { returnObjects: true }) as string[],
      popular: false,
      img: "/img.png"
    },
    {
      title: t('onlineTraining.plans.team.title'),
      description: t('onlineTraining.plans.team.description'),
      price: 109,
      features: t('onlineTraining.plans.team.features', { returnObjects: true }) as string[],
      popular: true,
      img: "/img_1.png"
    },
    {
      title: t('onlineTraining.plans.individual.title'),
      description: t('onlineTraining.plans.individual.description'),
      price: 169,
      features: t('onlineTraining.plans.individual.features', { returnObjects: true }) as string[],
      popular: false,
      img: "/img_2.jpg"
    }
  ];
};
