# Forever | Modern E-Commerce Platform

**Forever** is a fully responsive, feature-rich e-commerce application designed for a seamless shopping experience. Built with React and styled with Tailwind CSS, it offers a clean, modern UI for browsing collections, managing a cart, and processing orders.

## 🚀 Features

-   **Dynamic Product Catalog**: Browse products with categories and sub-category filtering.
-   **Advanced Search**: Real-time search functionality across the entire collection.
-   **Product Detail View**: Detailed product descriptions, size selection, and related product suggestions.
-   **Cart Management**: Add to cart, update quantities, and remove items with persistent state via Context API.
-   **Checkout System**: A multi-step checkout process including delivery information and payment method selection (Stripe, Razorpay, COD).
-   **Order Tracking**: View and track order history with status updates.
-   **Authentication UI**: Dedicated Sign Up and Login pages.
-   **Responsive Design**: Optimized for mobile, tablet, and desktop screens using Tailwind CSS.
-   **Toasts Notifications**: Real-time feedback for user actions (e.g., adding to cart) using `react-toastify`.

## 🛠️ Tech Stack

-   **Frontend**: React.js
-   **Styling**: Tailwind CSS
-   **Routing**: React Router DOM
-   **State Management**: React Context API
-   **Icons & Assets**: Custom assets and Lucide-like icon integrations.
-   **Notifications**: React Toastify

## 📦 Installation

To get a local copy up and running, follow these steps:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/forever-ecommerce.git
    cd forever-ecommerce/frontend
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open the browser**
    Navigate to `http://localhost:5173` (or the port specified by Vite).

## 📂 Project Structure

```text
src/
├── assets/             # Images and static files
├── components/         # Reusable UI components (Navbar, Footer, SearchBar, etc.)
├── context/            # ShopContext for global state management
├── pages/              # Page components (Home, Collection, Cart, Product, etc.)
├── App.jsx             # Main routing and application layout
└── main.jsx            # Application entry point
```

## 📸 Preview

*(Add screenshots or a GIF of your project here to make it more appealing!)*

-   **Home Page**: Featured and Latest collections.
-   **Collection Page**: Sidebar filters for Men, Women, and Kids.
-   **Product Page**: High-quality images with size selection.
-   **Cart**: Summary of selected items and total calculation.

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.


