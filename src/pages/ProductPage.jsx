import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import UserForm from '../components/UserForm';

const ProductPage = () => {
  const [formData, setFormData] = useState({ name: '', age: '', mobile: '', email: '' });
  const navigate = useNavigate();

  const handlePay = () => {
    const isSuccess = Math.random() > 0.3;
    if (isSuccess) {
      navigate('/success', { state: formData });
    } else {
      navigate('/failure');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-200 to-purple-300 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
        <ProductCard />
        <UserForm formData={formData} setFormData={setFormData} />

        <button
          onClick={handlePay}
          className="mt-6 bg-indigo-600 text-white w-full py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
