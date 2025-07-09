import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PaymentFail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4 text-red-400">{t('payment.fail.title')}</h1>
      <p className="text-lg">{t('payment.fail.message')}</p>
      <button
        className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
        onClick={() => navigate('/')}
      >
        {t('payment.fail.retry')}
      </button>
    </div>
  );
};

export default PaymentFail; 