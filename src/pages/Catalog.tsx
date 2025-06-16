import Footer from "../components/Footer";
import Header from "../components/Header";
import CatalogHeader from "../components/CatalogHeader";
import CatalogFilters from "../components/CatalogFilters";
import ProductGrid from "../components/ProductGrid";
import {Pagination} from "@heroui/react";


const products = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  title: "Gazelle Indoor Shoes",
  category: "Women sneakers",
  price: "$129.99",
  label: "Bestseller",
  imageUrl:
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e3635543c9f4019a265793eed48d382_9366/Samba_OG_Shoes_White_JH5688_01_00_standard.jpg",
}));

export default function Catalog() {
  return (
    <>
    <Header/>
    <CatalogHeader/>
        <div className="flex px-[160px] gap-8">
            <CatalogFilters/>
            <div className="flex-1">
              <ProductGrid products={products}/>
              <div className="mt-10 flex justify-center">
                <Pagination loop showControls color="success" initialPage={1} total={5} size="lg"/>
              </div>
            </div>
        </div>
    <Footer/>
    </>
  );
}
