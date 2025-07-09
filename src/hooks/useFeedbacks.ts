import { useTranslation } from 'react-i18next';
import { Feedback } from '../types/feedback';

export const useFeedbacks = (): Feedback[] => {
  const { i18n } = useTranslation();

  const feedbacksData = {
    en: [
      {
        avatar: '/dan.png',
        name: 'Daniel',
        text: 'I gained 12 kg in two months and it really changed my life. I became more confident and my well-being improved. Now I have much more life energy. My quality of life has significantly improved after training with Maksym!',
        city: 'Szczecin',
      },
      {
        avatar: '/nast.png',
        name: 'Nastya',
        text: 'I started training with Maksym because I wanted to tone my body and feel more confident. After just a month, I saw the first results — my body became more toned, and energy appeared literally the next day after the first workout. Thanks to the individual approach and support from Maksym, I finally fell in love with sports and learned to work on myself. These workouts became a real discovery for me!',
        city: 'Warsaw'
      },
      {
        avatar: '/mike.png',
        name: 'Mike',
        text: 'I already had experience with gym training, but I hit a stagnation phase. Maksym consulted me, made corrections to my technique and training program, and fixed my diet. As a result, I started progressing again, gained 8 kg and increased my strength indicators by an average of 20% in three months!',
        city: 'Budapest'
      },
    ],
    ru: [
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
    ],
    pl: [
      {
        avatar: '/dan.png',
        name: 'Daniel',
        text: 'Przybrałem 12 kg w dwa miesiące i to bardzo zmieniło moje życie. Stałem się bardziej pewny siebie, a moje samopoczucie się poprawiło. Teraz mam znacznie więcej energii życiowej. Jakość mojego życia znacznie się poprawiła po treningach z Maksymem!',
        city: 'Szczecin',
      },
      {
        avatar: '/nast.png',
        name: 'Nastia',
        text: 'Zaczęłam trenować z Maksymem, ponieważ chciałam poprawić sylwetkę i czuć się pewniej. Już po miesiącu zobaczyłam pierwsze rezultaty — ciało stało się bardziej wysportowane, a energia pojawiła się dosłownie następnego dnia po pierwszym treningu. Dzięki indywidualnemu podejściu i wsparciu Maksyma w końcu pokochałam sport i nauczyłam się pracować nad sobą. Te treningi stały się dla mnie prawdziwym odkryciem!',
        city: 'Warszawa'
      },
      {
        avatar: '/mike.png',
        name: 'Michał',
        text: 'Miałem już doświadczenie z treningami na siłowni, ale wpadłem w fazę stagnacji. Maksym mnie skonsultował, wprowadził poprawki do mojej techniki i programu treningowego oraz poprawił moją dietę. W rezultacie znów zacząłem robić postępy, przybrałem 8 kg i zwiększyłem swoje wyniki siłowe średnio o 20% w ciągu trzech miesięcy!',
        city: 'Budapeszt'
      },
    ],
    uk: [
      {
        avatar: '/dan.png',
        name: 'Данило',
        text: 'Я набрав 12 кг за два місяці і це дуже змінило моє життя. Я став впевненішим у собі і моє самопочуття покращилося. Тепер у мене набагато більше життєвої енергії. Якість мого життя значно покращилася після тренувань з Максимом!',
        city: 'Щецин',
      },
      {
        avatar: '/nast.png',
        name: 'Настя',
        text: 'Я почала тренуватися з Максимом, тому що хотіла підтягнути тіло і почуватися впевненіше. Вже через місяць я побачила перші результати — тіло стало більш підтягнутим, а енергія з\'явилася буквально наступного дня після першого тренування. Завдяки індивідуальному підходу та підтримці Максима я нарешті полюбила спорт і навчилася працювати над собою. Ці тренування стали для мене справжнім відкриттям!',
        city: 'Варшава'
      },
      {
        avatar: '/mike.png',
        name: 'Міша',
        text: 'У мене вже був досвід тренувань у залі, але я потрапив у фазу стагнації. Максим проконсультував мене, вніс корективи в мою техніку та програму тренувань і виправив мій раціон харчування. Як наслідок, я знову почав прогресувати, набрав 8 кг і збільшив свої силові показники в середньому на 20% за три місяці!',
        city: 'Будапешт'
      },
    ]
  };

  return feedbacksData[i18n.language as keyof typeof feedbacksData] || feedbacksData.en;
};
