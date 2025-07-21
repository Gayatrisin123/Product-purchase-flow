import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f0fff4] px-6 py-12 md:px-20">
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader className="flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-green-600" />
          <CardTitle className="text-green-700 text-xl">Payment Successful</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm md:text-base">
          <p className="text-gray-700">Thank you, <span className="font-semibold">{state.name}</span>! Your order has been placed successfully.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold">Email:</span> {state.email}</p>
              <p><span className="font-semibold">Mobile:</span> {state.mobile}</p>
              <p><span className="font-semibold">Age:</span> {state.age}</p>
            </div>
            <div>
              <p><span className="font-semibold">Product:</span> Premium Air Sneaker Pro</p>
              <p><span className="font-semibold">Amount Paid:</span> ₹12,999</p>
              <p><span className="font-semibold">Size:</span> 9</p>
            </div>
          </div>
          <div className="pt-4 text-green-700 font-medium">
            Your order is being processed. A confirmation email will be sent shortly.
          </div>
          <div className="pt-4">
            <Button onClick={() => navigate("/")} className="bg-green-600 hover:bg-green-700 text-white">
              Go to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}






// import { CheckCircle, Truck, Mail, Phone, CalendarDays, Download } from "lucide-react";
// import { Card, CardHeader, CardContent } from "./components/ui/card";
// import { Badge } from "./components/ui/badge";
// import { Button } from "./components/ui/button";
// import { useLocation, useNavigate } from "react-router-dom";

// export default function SuccessPage() {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const {
//     name,
//     email,
//     mobile,
//     age,
//     transactionId = "TXN" + Date.now(),
//     date = new Date().toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" }),
//     sku = "SNK-001",
//     color = "Black & Purple",
//   } = state || {};

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#e7fff1] to-[#f3f0fa] px-6 py-12 md:px-20">
//       <div className="text-center space-y-2 mb-10">
//         <CheckCircle className="text-green-600 mx-auto w-14 h-14" />
//         <h2 className="text-2xl font-bold text-green-700">Payment Successful!</h2>
//         <p className="text-gray-500 text-sm">
//           Your order has been confirmed and is being processed
//         </p>
//       </div>

//       <Card className="max-w-5xl mx-auto shadow-md">
//         <CardHeader className="bg-green-100/60 p-4 flex flex-col md:flex-row md:items-center justify-between">
//           <div>
//             <h3 className="text-lg font-semibold">Order Confirmed</h3>
//             <Badge variant="secondary" className="bg-green-200 text-green-800 mt-1">
//               Order #ORD{transactionId.slice(-8)}
//             </Badge>
//             <p className="text-sm text-gray-500 mt-1">{date}</p>
//           </div>
//           <div className="mt-2 md:mt-0 text-right">
//             <p className="text-sm text-gray-500">Total Paid</p>
//             <p className="text-lg font-bold text-green-700">₹12,999</p>
//           </div>
//         </CardHeader>

//         <CardContent className="p-6 space-y-6">
//           <div className="flex gap-6 items-start">
//             <img src="/shoe.jpeg" alt="Product" className="w-24 h-24 rounded-lg" />
//             <div className="flex-1">
//               <p className="font-semibold">Premium Air Sneaker Pro</p>
//               <p className="text-sm text-gray-500">Size: 9</p>
//               <p className="text-sm text-gray-500">Color: {color}</p>
//               <p className="text-sm text-gray-500">Quantity: 1</p>
//               <p className="text-sm text-gray-500">SKU: {sku}</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Customer Info */}
//             <div>
//               <h4 className="font-semibold mb-2">Customer Information</h4>
//               <p><strong>Name:</strong> {name}</p>
//               <p><strong>Email:</strong> {email}</p>
//               <p><strong>Mobile:</strong> {mobile}</p>
//               <p><strong>Age:</strong> {age}</p>
//             </div>

//             {/* Payment Info */}
//             <div>
//               <h4 className="font-semibold mb-2">Payment Information</h4>
//               <p><strong>Method:</strong> Razorpay</p>
//               <p><strong>Transaction ID:</strong> {transactionId}</p>
//               <p><strong>Status:</strong> <Badge variant="outline" className="text-green-600 border-green-400">Completed</Badge></p>
//             </div>
//           </div>

//           <div className="bg-violet-50 rounded-md p-4 mt-4 space-y-2">
//             <h4 className="font-semibold flex items-center gap-2 text-purple-700"><Truck size={16} />Delivery Information</h4>
//             <p><strong>Estimated Delivery:</strong> <span className="text-purple-700">Friday 25 July</span></p>
//             <p><strong>Tracking:</strong> Within 24 hours</p>
//             <p className="text-xs text-gray-500 flex items-center gap-1">
//               <Mail size={12} /> A confirmation email has been sent to <strong>{email}</strong>
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row justify-center gap-4 pt-6">
//             <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={() => alert("Downloading...")}>
//               <Download className="w-4 h-4 mr-2" /> Download Receipt
//             </Button>
//             <Button variant="outline" onClick={() => alert("Sharing...")}>
//               Share Order
//             </Button>
//             <Button variant="secondary" onClick={() => navigate("/")}>
//               Continue Shopping
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
