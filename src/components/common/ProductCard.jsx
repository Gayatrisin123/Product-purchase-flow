
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {
  const navigate = useNavigate();
    const handleBuyNow = () => {
    navigate("/checkout");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f1ecfa] py-12 px-6 md:px-20">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-purple-700">
        SoleStyle Premium
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Experience luxury with our handcrafted premium sneakers. Designed for comfort,
        built for style.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left: Image */}
        <div className="relative">
          <img
            src="/shoe.jpeg"
            alt="Product"
            className="rounded-xl shadow-xl"
          />
          <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Right: Info */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-500">(4.9/5 from 2,847 reviews)</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold mb-4">Premium Air Sneaker Pro</h3>

          <p className="text-gray-600 mb-6">
            Crafted with premium materials and cutting-edge technology, these sneakers deliver unmatched comfort and style.
            Perfect for daily wear or special occasions.
          </p>

          {/* Pricing */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl font-bold text-purple-700">₹12,999</span>
            <span className="line-through text-gray-400">₹18,999</span>
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded">32% OFF</span>
          </div>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">Key Features</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600 list-disc pl-5">
              <li>Premium Leather Upper</li>
              <li>Air Cushion Technology</li>
              <li>Anti-Slip Sole</li>
              <li>Moisture-Wicking Interior</li>
            </ul>
          </div>

          {/* Sizes */}
          <div className="mb-6">
            <h4 className="font-semibold text-lg mb-2">Size</h4>
            <div className="flex gap-3">
              {[7, 8, 9, 10, 11, 12].map((size) => (
                <button
                  key={size}
                  className="w-10 h-10 border border-gray-300 rounded hover:border-purple-600"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <Button onClick={handleBuyNow} className="bg-purple-600 hover:bg-purple-700 text-white px-8 text-sm">
              🛒 Buy Now
            </Button>
            <Button variant="outline" className="text-sm">
              Add to Cart
            </Button>
          </div>

          {/* Bottom Highlights */}
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
            <div>✓ Free Shipping</div>
            <div>✓ 30-Day Returns</div>
            <div>✓ 2-Year Warranty</div>
          </div>
        </div>
      </div>
    </div>
  );
}
