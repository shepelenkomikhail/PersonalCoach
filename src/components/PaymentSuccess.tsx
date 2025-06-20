import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4 text-green-400">Платеж Успешен!</h1>
      <p className="text-lg">Спасибо за Вашу покупку.</p>
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