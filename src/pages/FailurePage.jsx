import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";

export default function FailurePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#fff5f5] px-6 py-12 md:px-20">
      <Card className="max-w-3xl mx-auto shadow-lg border-red-300">
        <CardHeader className="flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          <CardTitle className="text-red-700 text-xl">Payment Failed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base">
          <p className="text-gray-700">
            Oops, <span className="font-semibold">{state.name}</span>! Something went wrong with your payment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold">Email:</span> {state.email}</p>
              <p><span className="font-semibold">Mobile:</span> {state.mobile}</p>
              <p><span className="font-semibold">Age:</span> {state.age}</p>
            </div>
            <div>
              <p><span className="font-semibold">Amount:</span> ₹{state.amount}</p>
              <p><span className="font-semibold">Gateway:</span> {state.gateway}</p>
              <p><span className="font-semibold">Reference ID:</span> {state.referenceId}</p>
              <p><span className="font-semibold">Error Code:</span> {state.errorCode}</p>
            </div>
          </div>
          <div className="pt-4 text-red-600 font-medium">
            Please try again or use a different payment method.
          </div>
          <div className="pt-4">
            <Button onClick={() => navigate("/checkout")} className="bg-red-600 hover:bg-red-700 text-white">
              Retry Payment
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}




// import { useLocation, useNavigate } from "react-router-dom"
// import { AlertTriangle, XCircle } from "lucide-react"
// import { Button } from "../ui/button"
// import { Card } from "../ui/card"

// export default function FailurePage() {
//   const location = useLocation()
//   const navigate = useNavigate()

//   const {
//     name,
//     email,
//     mobile,
//     age,
//     amount = 12999,
//     product = "Premium Air Sneaker Pro",
//     size = "9",
//     errorCode = "PAY_FAILED_001",
//     referenceId = "REF1753080174506",
//     gateway = "Razorpay",
//     time = new Date().toLocaleString("en-GB", {
//       day: "2-digit",
//       month: "long",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit"
//     })
//   } = location.state || {}

//   return (
//     <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-red-50 to-white flex flex-col items-center">
//       <div className="text-center mb-6">
//         <XCircle className="mx-auto text-red-600 w-16 h-16" />
//         <h1 className="text-3xl font-semibold text-red-600 mt-4">Payment Failed</h1>
//         <p className="text-gray-600 mt-2">
//           Don't worry, your order is saved. Let's try completing the payment again.
//         </p>
//       </div>

//       <Card className="w-full max-w-2xl bg-white shadow-xl">
//         <div className="border-b px-6 py-4 flex justify-between items-center bg-red-100">
//           <div>
//             <p className="text-sm text-gray-600">Transaction Failed</p>
//             <p className="text-xs text-gray-500">{time}</p>
//           </div>
//           <div className="text-right font-semibold text-lg text-red-600">
//             ₹{amount.toLocaleString()}
//           </div>
//         </div>

//         <div className="px-6 py-5">
//           {/* Error Info */}
//           <div className="mb-6 border rounded-md border-red-300 bg-red-50 p-4">
//             <h2 className="font-semibold text-red-700 mb-2">What happened?</h2>
//             <p className="text-sm text-gray-700">
//               Your payment could not be processed at this time. This can happen due to various reasons
//               such as network issues, insufficient funds, or temporary gateway problems.
//             </p>
//             <div className="mt-3 text-sm text-gray-600 space-y-1">
//               <p><strong>Error Code:</strong> {errorCode}</p>
//               <p><strong>Reference ID:</strong> {referenceId}</p>
//               <p><strong>Gateway:</strong> {gateway}</p>
//             </div>
//           </div>

//           {/* Common Solutions */}
//           <div className="mb-6">
//             <h2 className="text-gray-800 font-semibold mb-3">🛠 Common Issues & Solutions</h2>
//             <div className="space-y-3">
//               {[
//                 ["Insufficient Balance", "Please check your account balance and try again."],
//                 ["Card Declined", "Contact your bank or try a different payment method."],
//                 ["Network Issue", "Check your internet connection and retry."],
//                 ["Payment Gateway Error", "Try again in a few minutes or contact support."]
//               ].map(([title, desc], idx) => (
//                 <div key={idx} className="flex gap-3 items-start bg-gray-50 p-3 rounded-md border">
//                   <span className="text-yellow-500 font-bold text-xl">{idx + 1}</span>
//                   <div>
//                     <p className="font-semibold text-gray-800">{title}</p>
//                     <p className="text-sm text-gray-600">{desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Order Info */}
//           <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
//             <h2 className="font-medium text-gray-800 mb-2">🛍️ Your Order is Saved</h2>
//             <div className="text-sm space-y-1">
//               <p><strong>Product:</strong> {product}</p>
//               <p><strong>Size:</strong> {size}</p>
//               <p><strong>Price:</strong> ₹{amount.toLocaleString()}</p>
//               <p className="text-xs text-gray-500 pt-1">
//                 🕒 Your cart is saved for 24 hours. Complete the payment to secure your order.
//               </p>
//             </div>
//           </div>

//           {/* Button */}
//           <div className="mt-6 text-center">
//             <Button
//               onClick={() => navigate("/checkout", { state: { name, email, mobile, age } })}
//               className="bg-red-600 hover:bg-red-700 text-white"
//             >
//               Try Again
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </div>
//   )
// }
