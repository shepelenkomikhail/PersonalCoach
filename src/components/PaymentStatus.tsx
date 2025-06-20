import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentStatus = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4 text-blue-400">Статус Платежа</h1>
      <p className="text-lg">Ваш платеж обрабатывается. Пожалуйста, ожидайте...</p>
      <button
        className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
        onClick={() => navigate('/')}
      >
        На главную
      </button>
    </div>
  );
};

export default PaymentStatus; 