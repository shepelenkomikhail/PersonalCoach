import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PaymentStatus = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">{t('payment.status.title')}</h1>
      <p className="text-lg">{t('payment.status.processing')}</p>
      <button
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
        onClick={() => navigate('/')}
      >
        {t('payment.status.home')}
      </button>
    </div>
  );
};

export default PaymentStatus; 