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
import Product from './pages/Product';

export default function RouterWrapper() {
  const navigate = useNavigate();
  const href = useHref;

  return (
    <HeroUIProvider navigate={navigate} useHref={href}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </HeroUIProvider>
  );
}
