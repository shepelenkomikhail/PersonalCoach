import React from 'react';
import {motion} from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel.tsx";

interface Feedback {
    avatar: string;
    name: string;
    text: string;
    city: string;
}

const feedbacks: Feedback[] = [
    {
        avatar: '/dan.png',
        name: 'Данил',
        text: 'Я набрал 12 кг за два месяца и это очень изменило мою жизнь. Я стал увереннее в себе и моё самочувствие улучшилось. Теперь у меня намного больше жизненной энергии. Моё качество жизни намного улучшилось после тренировок с Максимом!',
        city: 'Щецин',
    },
    {
        avatar: '/nast.png',
        name: 'Настя',
        text: 'Я начала тренироваться с Максимом, потому что хотела подтянуть тело и чувствовать себя увереннее. Уже через месяц я увидела первые результаты — тело стало более подтянутым, а энергия появилась буквально на следующий день после первой тренировки. Благодаря индивидуальному подходу и поддержке Максима я наконец-то полюбила спорт и научилась работать над собой. Эти тренировки стали для меня настоящим открытием!',
        city: 'Варшава'
    },
    {
        avatar: '/mike.png',
        name: 'Миша',
        text: 'У меня уже был опыт тренировок в зале, но я попал в фазу стагнации. Максим проконсультировал меня, внёс коррективы в мою технику и программу тренировок и исправил мой рацион питания. Как следствие, я снова начал прогрессировать, набрал 8 кг и увеличил свои силовые показатели в среднем на 20% за три месяца!',
        city: 'Будапешт'
    },
];

const FeedbackCard: React.FC<Feedback> = ({avatar, name, text, city}) => (
    <div className="w-full p-6 bg-surface rounded-lg shadow-md flex flex-col items-center justify-between">
        <div className="flex flex-col items-center   rounded-lg mb-4 w-2/3">
            <img src={avatar} alt={name} className="w-[96px] rounded-full object-cover mb-2"/>
            <h4 className="font-semibold text-2xl" >{name}</h4>
        </div>


        <p className="text-gray-300 mb-4 "> "{text}" </p>
        <div className="flex gap-2 items-center">
            <h4 className="text-white text-center font-semibold text-lg mb-[2px]">{city}</h4>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                 strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-map-pin-icon lucide-map-pin h-5">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                <circle cx="12" cy="10" r="3"/>
            </svg>
        </div>
    </div>
);

const Feedbacks: React.FC = () => {
    return (
      <section id="feedbacks" className="section-padding relative overflow-hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          </motion.div>

          <Carousel className="w-full max-w-2xl mx-auto">
            <CarouselContent>
              {feedbacks.map((feedback, index) => (
                <CarouselItem key={index}>
                  <FeedbackCard {...feedback} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="absolute -z-10 -bottom-16 -right-16 w-64 h-64 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -z-10 top-20 -left-16 w-48 h-48 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
      </section>
    );
};

export default Feedbacks;