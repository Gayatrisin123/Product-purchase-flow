import { useNavigate } from 'react-router-dom';

const FailurePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-red-100 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed 😢</h1>
        <p>Something went wrong during the payment.</p>
        <p className="text-sm mt-2 text-gray-500">Please try again.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Retry Payment
        </button>
      </div>
    </div>
  );
};

export default FailurePage;
