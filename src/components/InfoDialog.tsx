import { trainingPlans } from "../info/trainingPlans.ts";
import PayButton from "./PayButton.tsx";

export default function InfoDialog({setShowDialog}: { setShowDialog: (show: boolean) => void }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 scrollbar-none">
            <div className="bg-black text-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
                <button onClick={() => setShowDialog(false)} className="absolute top-2 right-4 text-xl">&times;</button>
                <h2 className="text-xl font-bold mb-4">МЕТОДОЛОГИЯ ПРОДУКТА: «Трансформация тела»</h2>
                <hr className={"my-8"}></hr>

                <p className="mb-4"><b>Продукт:</b> Курс по набору массы тела с поддержкой и обратной связью в телеграм канале!</p>
                <hr className={"my-8"}></hr>

                <p className="mb-2 font-semibold">Основная идея:</p>
                <ul className="list-disc ml-5 mb-4 space-y-1 text-sm">
                    <li>Развить и укрепить мышцы, повысить их объем и силу</li>
                    <li>Добиться здорового и эстетичного тела</li>
                    <li>Кайфуешь на тренировках и не теряешь мотивацию</li>
                    <li>Не набираешь лишний жир, набираешь массу</li>
                    <li>Научишься есть без вины и тревоги</li>
                    <li>Сформулируешь четкую систему, которая останется с тобой на всю жизнь</li>
                </ul>
                <hr className={"my-8"}></hr>

                <p className="mb-2 font-semibold">Что входит:</p>
                <ul className="list-disc ml-5 mb-4 space-y-1 text-sm">
                    <li>Готовый план эффективных тренировок на месяц</li>
                    <li>Сбалансированное меню</li>
                    <li>Доступ в ТГ-канал с продуктовой корзиной и КБЖУ</li>
                    <li>Рецепты, советы, фишки</li>
                    <li>Тренировки для дома и зала</li>
                </ul>

                <p className="mb-2 font-semibold">Формат:</p>
                <p className="mb-4 text-sm">Курс делится на 4 модуля (по 1 в неделю), каждый модуль — видеоуроки, материалы и задания.</p>
                <hr className={"my-8"}></hr>

                <p className="mb-2 font-semibold">Тарифы:</p>
                <div className="text-sm space-y-3 mb-4">
                    {/*@ts-ignore*/}
                    {trainingPlans.map((plan, index) => (
                      <div key={plan.title}>
                          <div className="mb-8"></div>
                        <strong>{index + 1}. {plan.title}</strong><br />
                        {plan.description}
                        <ul className="list-disc ml-5 my-2">
                            {/*@ts-ignore*/}
                          {plan.features.map(feature => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                        <p className={"text-lg font-bold"}>Цена: {plan.price} €</p>
                          <div className={"mb-3"}></div>
                          <PayButton text={`КУПИТЬ "${plan.title}"`} popular={true} amount={plan.price} description={plan.description} />
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
}