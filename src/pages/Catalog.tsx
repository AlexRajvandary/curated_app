import Footer from "../components/Footer";
import Header from "../components/Header";
import CatalogHeader from "../components/CatalogHeader";
import CatalogFilters from "../components/CatalogFilters";
import ProductGrid from "../components/ProductGrid";
import {Pagination} from "@heroui/react";


const imageUrls = [
  "https://media-assets.grailed.com/prd/listing/temp/5e7bf3028cda41b2a88857b3b63718a6?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/e895402f06104144bcbb9fe3f413dc8e?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/c22f7b874a3f4176b67c0af47eeaf136?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/1e28392133074d09b766a9d68e32ef0e?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/e5ae2c204b2b49a2bfa8a439f8736a93?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/2ee601783696456cb49d7419a2216fae?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/efbc132008b340188ed47d88c9eb32b9?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/375caa746b264187a68eddbf49365378?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/5334ede658de4b39ab84e7577aad0e8e?orient=90&w=800",
  "https://media-assets.grailed.com/prd/listing/temp/59ce47f62e224856b514ae5409f02811?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/83d7af753be74658a9a713c2f34f0b84?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/899e2751c3754a22a8e3809ed303814d?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/a4a894fa4f9948cb9ef7aa711b10754a?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/52b734b6d49c4c3a8b1caba377f5a941?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/837d9b5bf3d4426db736434962cc511e?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/cfb7ddea860247939d37249ede1e5fcc?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/f02410889b3a4404afebf82373c8e0ed?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/300b38de45c14e62a058db36c68ec787?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/2491593b40544b2a80ca6f69367eaf78?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/83f52e47a9f4454381ced4fa8115708d?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/51a92e39a3604a1fa34a62702673e7f1?w=800",
  "https://media-assets.grailed.com/prd/listing/temp/06a8dc73bf034e71bc1b6d9734a8587d?w=800",
  "https://media-assets.grailed.com/prd/misc/7f3a274f11984cc19fbc6edc49e355bb?w=800"
];

const titles = [
  "Denim Jacket Classic",
  "Retro Leather Sneakers",
  "Oversized Hoodie",
  "Utility Cargo Pants",
  "Striped Shirt",
  "Techwear Bomber",
  "Vintage Wool Coat",
  "Mesh Running Shoes",
  "Leather Chelsea Boots",
  "Linen Short Sleeve",
  "Distressed Jeans",
  "Plaid Overshirt",
  "Canvas Backpack",
  "Performance Tracksuit",
  "Minimalist Turtleneck",
  "Puffer Down Jacket",
  "Chunky Sneakers",
  "Graphic Tee",
  "Rugged Workwear Shirt",
  "Premium Parka",
  "Silk Blend Blouse",
  "Slim-Fit Chinos",
  "Embroidered Sweater"
];

const categories = [
  "Men's Outerwear",
  "Women's Tops",
  "Sneakers",
  "Unisex Accessories",
  "Streetwear",
  "Vintage Collection",
  "Modern Essentials",
  "Limited Edition"
];

const labels = ["Bestseller", "New", "Limited", "Sale", "Featured", "Hot"];

function getRandom(arr: string[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPrice() {
  return `$${(Math.random() * 200 + 40).toFixed(2)}`;
}

const products = imageUrls.map((imageUrl, i) => ({
  id: i,
  title: titles[i % titles.length],
  category: getRandom(categories),
  price: getRandomPrice(),
  label: getRandom(labels),
  imageUrl,
}));


export default function Catalog() {
  return (
    <>
    <Header/>
    <CatalogHeader/>
        <div className="flex pl-[160px] gap-8">
            <CatalogFilters/>
            <div className="flex-1">
              <ProductGrid products={products}/>
              <div className="mt-10 flex justify-center">
                <Pagination loop showControls variant="light" color="success" initialPage={1} total={5} size="lg"/>
              </div>
            </div>
        </div>
    <Footer/>
    </>
  );
}
