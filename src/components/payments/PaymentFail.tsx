import { useNavigate } from 'react-router-dom';

const PaymentFail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4 text-red-400">Ошибка!</h1>
      <p className="text-lg">Что-то пошло не так. Пожалуйста, попробуйте еще раз.</p>
      <button
        className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition"
        onClick={() => navigate('/')}
      >
        На главную
      </button>
    </div>
  );
};

export default PaymentFail; 