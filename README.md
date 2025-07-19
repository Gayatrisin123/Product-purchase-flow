# 🛒 Product Purchase + Payment Flow (Frontend Only)

This is a frontend simulation of a product purchase flow with Razorpay-style payment simulation, created using React, Tailwind CSS, and React Router.

## 🔥 Features
- Product page with image & price
- User data collection form (Name, Age, Mobile, Email)
- Simulated payment using a loading state and random success/failure
- Redirect to success/failure page
- Clean, responsive, modern UI

## 📷 Screenshots
- `Product Page`: shows product & form
- `Loading State`: after clicking Buy Now
- `Success Page`: shows user info and order ID
- `Failure Page`: allows retry

## 🚀 Run Locally

```bash
# 1. Clone this repo or create new project using Vite
npm create vite@latest product-purchase-flow -- --template react
cd product-purchase-flow

# 2. Install dependencies
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install react-router-dom

# 3. Add Tailwind config
# (as shown in tailwind.config.js above)

# 4. Paste source code inside /src folder

# 5. Run the dev server
npm run dev
