import {
  HeroUIProvider
} from "@heroui/react";
import {
  useNavigate,
  useHref,
  Routes,
  Route
} from 'react-router-dom';

import App from './pages/App';
import About from './pages/About';
import Catalog from './pages/Catalog';
import Product from './pages/ProductPage';
import UserPage from "./pages/UserPage";
import ListNewProduct from "./pages/ListNewProduct";
import Messenger from "./pages/Messenger";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import Drafts from "./pages/Drafts";
import Settings from "./pages/Settings";

import ProfileSettings from "./components/ProfileSettings";
import SecuritySettings from "./components/SecuritySettings";
import NotificationsSettings from "./components/NotificationsSettings";
import MySizes from "./components/MySizes";
import PaymentsSettings from "./components/PaymentsSettings";
import Devices from "./components/Devices";

export default function RouterWrapper() {
  const navigate = useNavigate();
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/listNewProduct" element={<ListNewProduct />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:orderId" element={<Order/>} />
        <Route path="/drafts" element={<Drafts />} />

        {/* Вложенные маршруты настроек */}
        <Route path="/settings" element={<Settings />}>
          <Route index element={<ProfileSettings />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="notifications" element={<NotificationsSettings />} />
          <Route path="my_sizes" element={<MySizes />} />
          <Route path="payments" element={<PaymentsSettings />} />
          <Route path="devices" element={<Devices />} />
        </Route>
      </Routes>
    </HeroUIProvider>
  );
}