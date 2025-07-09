import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type PayButtonProps = {
    text: string;
    popular?: boolean;
    amount: number;
    description: string;
};

export default function PayButton({ text, popular, amount, description }: PayButtonProps) {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [showDialog, setShowDialog] = useState(false);

    const handleClick = async () => {
        setShowDialog(true);
    };

    const closeDialog = () => {
        setShowDialog(false);
    };

    const handleCryptoPayment = () => {
        // Логика оплаты в криптовалюте
        switch (amount){
            case 59:
                window.open("https://plisio.net/payment-button/new/Jlc47JaQJOre", "_blank");
                break;
            case 109:
                window.open("https://plisio.net/payment-button/new/diepLYDnMYHA", "_blank");
                break;
            case 169:
                window.open("https://plisio.net/payment-button/new/U-OeiwJShbFU", "_blank");
                break;
            default:
                alert(t('payment.errors.unknownPlan'));
                return;
        }

        closeDialog();
    };

    const handleCardPayment = () => {
        // Логика оплаты картой
        switch (amount){
            case 59:
                window.open("https://buymeacoffee.com/maxfitness/e/424090", "_blank");
                break;
            case 109:
                window.open("https://buymeacoffee.com/maxfitness/e/424091", "_blank");
                break;
            case 169:
                window.open("https://buymeacoffee.com/maxfitness/e/424092", "_blank");
                break;
            default:
                alert(t('payment.errors.unknownPlan'));
                return;
        }
        closeDialog();
    };

    const handleTgPayment = () => {
        // Логика оплаты для РФ через Telegram
        switch (amount){
            case 59:
                window.open("https://t.me/maksym_fitnes", "_blank");
                break;
            case 109:
                window.open("https://t.me/maksym_fitnes", "_blank");
                break;
            case 169:
                window.open("https://t.me/maksym_fitnes", "_blank");
                break;
            default:
                alert(t('payment.errors.unknownPlan'));
                return;
        }
        closeDialog();
    }


    return (
        <>
            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleClick}
                disabled={loading}
                className={`w-full py-2.5 rounded ${
                    popular ? "bg-white text-black" : "border border-white text-white"
                } flex items-center justify-center ${loading ? "opacity-50" : ""}`}
            >
                <span>{loading ? t('common.loading') : text}</span>
                <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>

            <AnimatePresence>
                {showDialog && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-xl p-6 w-80 text-center"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                        >
                            <h2 className="text-lg text-black font-semibold mb-4">{t('onlineTraining.choosePayment')}</h2>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={handleCryptoPayment}
                                    className="bg-black text-white py-2 rounded hover:bg-gray-900 transition"
                                >
                                    {t('payment.methods.crypto')}
                                </button>
                                <button
                                    onClick={handleCardPayment}
                                    className="bg-black text-white py-2 rounded hover:bg-gray-900 transition"
                                >
                                    {t('payment.methods.card')}
                                </button>
                                <button
                                    onClick={handleTgPayment}
                                    className="bg-black text-white py-2 rounded hover:bg-gray-900 transition"
                                >
                                    {t('payment.methods.telegram')}
                                </button>
                                <button
                                    onClick={closeDialog}
                                    className="text-sm text-gray-500 mt-2 hover:underline"
                                >
                                    {t('common.close')}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
