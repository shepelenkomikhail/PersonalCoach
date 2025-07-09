import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {Send} from "lucide-react";
import { useTranslation } from 'react-i18next';

const PaymentSuccess = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className={"flex flex-col text-center"}>
            <h1 className="text-3xl font-bold mb-4 text-green-400">{t('payment.success.title')}</h1>

            <p className="text-lg">{t('payment.success.thanks')}</p>
            <p className="text-lg">{t('payment.success.instruction')}</p>
            <div className={"flex text-center items-center justify-center mt-4 gap-4"}>
                <a href="https://t.me/maksfitnes?fbclid=PAZXh0bgNhZW0CMTEAAafKMDURfofWMjsYD2Vgw5qTqqKaTXc3n730ZN3nqHWoaOD9g7is28kp2mcvtA_aem_UtdXBhf1dnXbE4BmzW2Ivg" target="_blank">
                    @masiiania
                </a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://t.me/maksfitnes?fbclid=PAZXh0bgNhZW0CMTEAAafKMDURfofWMjsYD2Vgw5qTqqKaTXc3n730ZN3nqHWoaOD9g7is28kp2mcvtA_aem_UtdXBhf1dnXbE4BmzW2Ivg"
                    target="_blank"
                    className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center"
                >
                    <Send className="w-5 h-5" />
                </motion.a>
            </div>

        </div>
      <button
        className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
        onClick={() => navigate('/')}
      >
        На главную
      </button>
    </div>
  );
};

export default PaymentSuccess; 