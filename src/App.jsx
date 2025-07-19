import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import SuccessPage from './pages/SuccessPage';
import FailurePage from './pages/FailurePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/failure" element={<FailurePage />} />
    </Routes>
  );
}

export default App;
