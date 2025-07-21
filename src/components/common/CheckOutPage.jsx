import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!/^[a-zA-Z\s]{3,30}$/.test(form.name)) {
      newErrors.name = "Enter a valid full name (3-30 letters).";
    }

    if (!/^(1[89]|[2-9][0-9])$/.test(form.age)) {
      newErrors.age = "Enter valid age (18+).";
    }

    if (!/^\+91[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10-digit Indian number with +91.";
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const allValid = validate();
    setIsValid(allValid);
  }, [form]);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (validate()) {
      toast.success("Payment successful!", { autoClose: 2000 });
      navigate("/success", { state: form });
    } else {
      toast.error("Payment failed due to invalid details.", { autoClose: 2000 });
      navigate("/failure", {
        state: {
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          age: form.age,
          amount: 12999,
          product: "Premium Air Sneaker Pro",
          size: "9",
          errorCode: "PAY_FAILED_001",
          referenceId: `REF${Date.now()}`,
          gateway: "Razorpay",
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f1ecfa] px-6 py-12 md:px-20">
      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <span className="hover:text-blue-700">
          <ArrowLeft size={32} />
        </span>
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Secure Checkout</h1>
          <p className="text-sm text-gray-500">Complete your purchase safely</p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left - Payment Details */}
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-0">
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              Payment Details
            </CardTitle>
            <span className="text-xs rounded bg-gray-100 px-2 py-1 text-gray-500">
              Secure
            </span>
          </CardHeader>

          <CardContent className="space-y-6 pt-4">
            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="age">Age *</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Your age"
                  value={form.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                />
                {errors.age && (
                  <p className="text-red-500 text-xs mt-1">{errors.age}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="mobile">Mobile Number *</Label>
              <Input
                id="mobile"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={form.mobile}
                onChange={(e) => handleChange("mobile", e.target.value)}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Payment Method */}
            <div>
              <p className="font-semibold mb-2">Payment Method</p>
              <div className="flex gap-4">
                <Card className="border-2 border-purple-500 bg-purple-100 w-1/2 text-center py-4">
                  <p className="text-purple-800 font-medium">Razorpay</p>
                  <p className="text-xs text-purple-600">Cards, UPI, Wallets</p>
                </Card>
                <Card className="border-2 border-gray-200 w-1/2 text-center text-gray-400 py-4">
                  <p className="font-medium">Paytm</p>
                  <p className="text-xs">Coming Soon</p>
                </Card>
              </div>
            </div>

            <Button
              className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2"
              onClick={handleSubmit}
              disabled={!isValid}
            >
              Pay ₹12,999
            </Button>

            <p className="text-center text-xs text-gray-500">
              By proceeding, you agree to our{" "}
              <span className="underline">Terms & Conditions</span>
            </p>
          </CardContent>
        </Card>

        {/* Right - Order Summary */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4 items-center">
              <img
                src="/shoe.jpeg"
                alt="Shoe"
                className="w-20 h-20 rounded-lg"
              />
              <div className="flex-1">
                <p className="font-medium">Premium Air Sneaker Pro</p>
                <p className="text-sm text-gray-500">Size: 9</p>
                <p className="text-sm text-gray-500">Quantity: 1</p>
              </div>
              <span className="font-semibold text-gray-700">₹12,999</span>
            </div>

            <div className="border-t pt-4 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹12,999</span>
              </div>
              <div className="flex justify-between">
                <span>
                  Discount <span className="text-green-600">(32%)</span>
                </span>
                <span className="text-green-600">-₹6,000</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹0</span>
              </div>
              <div className="flex justify-between border-t pt-3 font-bold text-lg">
                <span>Total</span>
                <span>₹12,999</span>
              </div>
            </div>

            <div className="pt-4 space-y-1 text-sm text-green-600">
              <p>✓ Secure payment processing</p>
              <p>✓ 30-day return policy</p>
              <p>✓ Free shipping included</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}






// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { Button } from "../ui/button";
// import { Input } from "../ui/input";
// import { Label } from "../ui/label";
// import { ShieldCheck, ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// export default function CheckoutPage() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     mobile: "",
//     email: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (field, value) => {
//     setForm({ ...form, [field]: value });
//   };

//   const handleSubmit = () => {
//     if (validate()) {
//       navigate("/success", { state: form });
//     } else {
//       navigate("/failure", {
//         state: {
//           name: form.name,
//           email: form.email,
//           mobile: form.mobile,
//           age: form.age,
//           amount: 12999,
//           product: "Premium Air Sneaker Pro",
//           size: "9",
//           errorCode: "PAY_FAILED_001",
//           referenceId: `REF${Date.now()}`,
//           gateway: "Razorpay",
//         },
//       });
//     }
//   };

//   const validate = () => {
//     const newErrors = {};

//     if (!/^[a-zA-Z\s]{3,30}$/.test(form.name)) {
//       newErrors.name = "Enter a valid full name (3-30 letters).";
//     }

//     if (!/^(1[89]|[2-9][0-9])$/.test(form.age)) {
//       newErrors.age = "Enter valid age (18+).";
//     }

//     if (!/^\+91[6-9]\d{9}$/.test(form.mobile)) {
//       newErrors.mobile = "Enter valid 10-digit Indian number with +91.";
//     }

//     if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
//       newErrors.email = "Enter a valid email.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-[#f1ecfa] px-6 py-12 md:px-20">
//       {/* Header */}
//       <div className="mb-8 flex items-center gap-3">
//         <span className="hover:text-blue-700">
//           <ArrowLeft size={32} />
//         </span>

//         <div>
//           <h1 className="text-2xl font-bold md:text-3xl">Secure Checkout</h1>
//           <p className="text-sm text-gray-500">Complete your purchase safely</p>
//         </div>
//       </div>

//       {/* Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left - Payment Details */}
//         <Card className="shadow-md">
//           <CardHeader className="flex flex-row items-center justify-between pb-0">
//             <CardTitle className="flex items-center gap-2 text-lg">
//               <ShieldCheck className="w-5 h-5 text-green-600" />
//               Payment Details
//             </CardTitle>
//             <span className="text-xs rounded bg-gray-100 px-2 py-1 text-gray-500">
//               Secure
//             </span>
//           </CardHeader>

//           <CardContent className="space-y-6 pt-4">
//             {/* Form */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <Label htmlFor="name">Full Name *</Label>
//                 <Input
//                   id="name"
//                   placeholder="Enter your full name"
//                   value={form.name}
//                   onChange={(e) => handleChange("name", e.target.value)}
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-xs mt-1">{errors.name}</p>
//                 )}
//               </div>
//               <div>
//                 <Label htmlFor="age">Age *</Label>
//                 <Input
//                   id="age"
//                   type="number"
//                   placeholder="Your age"
//                   value={form.age}
//                   onChange={(e) => handleChange("age", e.target.value)}
//                 />
//                 {errors.age && (
//                   <p className="text-red-500 text-xs mt-1">{errors.age}</p>
//                 )}
//               </div>
//             </div>

//             <div>
//               <Label htmlFor="mobile">Mobile Number *</Label>
//               <Input
//                 id="mobile"
//                 type="tel"
//                 placeholder="+91 XXXXX XXXXX"
//                 value={form.mobile}
//                 onChange={(e) => handleChange("mobile", e.target.value)}
//               />
//               {errors.mobile && (
//                 <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
//               )}
//             </div>

//             <div>
//               <Label htmlFor="email">Email Address *</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="your.email@example.com"
//                 value={form.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//               )}
//             </div>

//             {/* Payment Method */}
//             <div>
//               <p className="font-semibold mb-2">Payment Method</p>
//               <div className="flex gap-4">
//                 <Card className="border-2 border-purple-500 bg-purple-100 w-1/2 text-center py-4">
//                   <p className="text-purple-800 font-medium">Razorpay</p>
//                   <p className="text-xs text-purple-600">Cards, UPI, Wallets</p>
//                 </Card>
//                 <Card className="border-2 border-gray-200 w-1/2 text-center text-gray-400 py-4">
//                   <p className="font-medium">Paytm</p>
//                   <p className="text-xs">Coming Soon</p>
//                 </Card>
//               </div>
//             </div>

//             <Button
//               className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm py-2"
//               onClick={handleSubmit}
//               disabled={!form.name || !form.age || !form.mobile || !form.email}
//             >
//               Pay ₹12,999
//             </Button>

//             <p className="text-center text-xs text-gray-500">
//               By proceeding, you agree to our{" "}
//               <span className="underline">Terms & Conditions</span>
//             </p>
//           </CardContent>
//         </Card>

//         {/* Right - Order Summary */}
//         <Card className="shadow-md">
//           <CardHeader>
//             <CardTitle className="text-lg">Order Summary</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="flex gap-4 items-center">
//               <img
//                 src="/shoe.jpeg"
//                 alt="Shoe"
//                 className="w-20 h-20 rounded-lg"
//               />
//               <div className="flex-1">
//                 <p className="font-medium">Premium Air Sneaker Pro</p>
//                 <p className="text-sm text-gray-500">Size: 9</p>
//                 <p className="text-sm text-gray-500">Quantity: 1</p>
//               </div>
//               <span className="font-semibold text-gray-700">₹12,999</span>
//             </div>

//             <div className="border-t pt-4 space-y-2 text-sm text-gray-700">
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹12,999</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>
//                   Discount <span className="text-green-600">(32%)</span>
//                 </span>
//                 <span className="text-green-600">-₹6,000</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Shipping</span>
//                 <span className="text-green-600">FREE</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Tax</span>
//                 <span>₹0</span>
//               </div>
//               <div className="flex justify-between border-t pt-3 font-bold text-lg">
//                 <span>Total</span>
//                 <span>₹12,999</span>
//               </div>
//             </div>

//             <div className="pt-4 space-y-1 text-sm text-green-600">
//               <p>✓ Secure payment processing</p>
//               <p>✓ 30-day return policy</p>
//               <p>✓ Free shipping included</p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
