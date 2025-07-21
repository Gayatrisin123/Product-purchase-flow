import ProductCard from "../components/common/ProductCard";
import UserForm from "../components/common/CheckOutPage";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
  });
  const [selectedSize, setSelectedSize] = useState("10");
  const navigate = useNavigate();

  const handlePayment = () => {
    const isSuccess = Math.random() > 0.3;
    const data = { ...formData, selectedSize, product: "Premium Air Sneaker Pro" };
    navigate(isSuccess ? "/success" : "/failure", { state: data });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
      <div className="max-w-5xl mx-auto">
        <ProductCard selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
        <UserForm formData={formData} setFormData={setFormData} />
        <Button onClick={handlePayment} className="mt-6 w-full bg-purple-600 hover:bg-purple-700">
          Pay Now
        </Button>
      </div>
    </div>
  );
}
