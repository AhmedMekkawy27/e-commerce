import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";
import RootLayout from "../pages/layout/Layout";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PageNotFound from "../pages/PageNotFound";
import Profile from "../pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="Login"
          element={
            <ProtectedRoute login="login" redirectPath="/">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedRoute login="login" redirectPath="/">
              <Register />
            </ProtectedRoute>
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route
          path="cart"
          element={
            <ProtectedRoute redirectPath="/login">
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="cart/checkout"
          element={
            <ProtectedRoute redirectPath="/login">
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="products" element={<Products />} />
        <Route
          path="wishlist"
          element={
            <ProtectedRoute redirectPath="/login">
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute redirectPath="/login">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="products/:productId" element={<ProductDetails />} />
      </Route>

      <Route
        path="*"
        element={
          <>
            <Navbar />
            <PageNotFound />
            <Footer />
          </>
        }
      />
    </>
  )
);

export default router;
