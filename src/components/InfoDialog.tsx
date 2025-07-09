import { useTranslation } from 'react-i18next';
import { useTrainingPlans } from "../hooks/useTrainingPlans";
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PayButton from "./PayButton.tsx";

export default function InfoDialog({setShowDialog}: { setShowDialog: (show: boolean) => void }) {
    const { t } = useTranslation();
    const trainingPlans = useTrainingPlans();

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Handle outside click to close modal
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setShowDialog(false);
        }
    };

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowDialog(false);
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [setShowDialog]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
                className="bg-black text-white rounded-lg max-w-2xl w-full max-h-[90vh] relative border border-gray-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Fixed close button */}
                <motion.button
                    onClick={() => setShowDialog(false)}
                    className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white transition-all duration-200 z-10 bg-gray-800 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
                    aria-label="Close modal"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    &times;
                </motion.button>

                {/* Scrollable content with hidden scrollbar */}
                <div className="overflow-y-auto max-h-[90vh] p-6 pr-12 scrollbar-hide" style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}>
                <h2 className="text-xl font-bold mb-4">{t('infoDialog.title')}</h2>
                <hr className={"my-8"}></hr>

                <p className="mb-4"><b>{t('infoDialog.product')}</b> {t('infoDialog.productDescription')}</p>
                <hr className={"my-8"}></hr>

                <p className="mb-2 font-semibold">{t('infoDialog.mainIdea')}</p>
                <ul className="list-disc ml-5 mb-4 space-y-1 text-sm">
                    {t('infoDialog.goals', { returnObjects: true }).map((goal: string, index: number) => (
                        <li key={index}>{goal}</li>
                    ))}
                </ul>
                <hr className={"my-8"}></hr>

                <p className="mb-2 font-semibold">{t('infoDialog.includes')}</p>
                <ul className="list-disc ml-5 mb-4 space-y-1 text-sm">
                    {t('infoDialog.includesList', { returnObjects: true }).map((item: string, index: number) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <p className="mb-2 font-semibold">{t('infoDialog.format')}</p>
                <p className="mb-4 text-sm">{t('infoDialog.formatDescription')}</p>
                <hr className={"my-8"}></hr>

                <p className="mb-2 font-semibold">{t('infoDialog.tariffs')}</p>
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
                        <p className={"text-lg font-bold"}>{t('infoDialog.price')}: {plan.price} {t('common.euro')}</p>
                          <div className={"mb-3"}></div>
                          <PayButton text={`${t('onlineTraining.buy')} "${plan.title}"`} popular={true} amount={plan.price} description={plan.description} />
                      </div>
                    ))}
                </div>
                </div>
            </motion.div>
        </motion.div>
    );
}