import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ImageGallery from "../components/ImageGallery";
import Carousel from "../components/Carousel";
import { Avatar, Button, Card } from "@heroui/react";
import { HeartIcon } from "../components/HeartIcon";
import { BookmarkIcon } from "../components/SavedIcon";

const images = [
  "https://media-assets.grailed.com/prd/listing/temp/6715321cb166457bb7558949ae988a96?w=800",
  "https://media-assets.grailed.com/prd/listing/73652406/0e928061dfdc42f2b206c6cf2196e949?w=800",
  "https://media-assets.grailed.com/prd/listing/73652406/c41b9a29de1a45de9314a6ac6ddbcba1?w=800",
  "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
]

 const products = [
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
  // другие карточки...
];
export default function Product() {
  return (
    <>
   
    <Header/>
         <div className="px-[140px]">
         <div className="flex py-8 gap-12">
      {/* Галерея фото — слева */}
      <div className="w-2/3 ml-8">
           <ImageGallery images={images} />
      </div>

      {/* Информация о товаре — справа */}
      <div className="w-1/3 flex flex-col justify-start">
        <h1 className="text-3xl font-bold mb-4">Tee × Tee Shirt × Vintage</h1>
        <p className="text-lg mb-2">Категория: Women sneakers</p>
         <p className="text-lg mb-2">Brand</p>
        <p className="text-lg mb-2">Men's / US S / EU 44-46 / 1</p>
        <p className="text-lg mb-2">Blue</p>
        <p className="text-lg mb-2">Used</p>
        <p className="text-base mb-4">
          Yugioh Tee Shirt Vintage 90s Y2k Joey Wheeler Blue Eyes White Dragon Longsleeve Shirt Size S/XS
        </p>
        <div className="flex items-center justify-between w-full mb-6">
           <div className="flex items-center gap-2">
          <Button isIconOnly aria-label="Like" variant="bordered">
              <HeartIcon fill="#F71735" stroke="#F71735"/>
          </Button>
          <Button isIconOnly aria-label="Like" variant="bordered">
            <BookmarkIcon fill="black"/>
          </Button>
          
        </div>
        <p className="text-2xl text-black font-bold text-end">$129.99</p>
        </div>
       
       
        <Button color="success" size="lg"  className="bg-gradient-to-tr my-2 from-pink-500 to-yellow-500 text-white shadow-lg rounded-lg">Purchase</Button>
        <Button size="lg"  variant="ghost" className="py-2 px-6 my-2 rounded-lg">Offer</Button>
        <Button size="lg"  variant="ghost" className="py-2 px-6 my-2 rounded-lg">Message</Button>
        <Card>
          <Avatar/>
        </Card>
      </div>
    </div>
    
    <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>You may also like:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
                  <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>Also in this category:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
    <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>Also from this Seller:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>

     <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>Also from this Brand:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
      <div style={{
                 fontSize: "30px",
                 marginBottom: "20px"}}>Bestsellers:</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
    </div>
    <Footer/>
    </>
  );
}