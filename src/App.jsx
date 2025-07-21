import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductPage from "./components/common/ProductCard";
import CheckoutPage from "./components/common/CheckOutPage";
import SuccessPage from "./pages/SuccessPage";
import FailurePage from "./pages/FailurePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/failure" element={<FailurePage />} />
      </Routes>
    </Router>
  );
}

export default App;



// import { Routes, Route } from "react-router-dom";
// import ProductPage from "./pages/ProductPage";
// import SuccessPage from "./pages/SuccessPage";
// import FailurePage from "./pages/FailurePage";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<ProductPage />} />
//       <Route path="/success" element={<SuccessPage />} />
//       <Route path="/failure" element={<FailurePage />} />
//     </Routes>
//   );
// }

// export default App;
