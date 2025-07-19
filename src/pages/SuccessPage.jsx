import { useLocation, useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful 🎉</h1>
        <p className="mb-2">Thank you, <strong>{state?.name || "User"}</strong>!</p>
        <p>Your order has been placed successfully.</p>
        <p className="text-sm mt-4 text-gray-500">We’ve emailed you the receipt at <strong>{state?.email}</strong>.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
