import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ImageGallery from "../components/ImageGallery";
import Carousel from "../components/Carousel";
import { Avatar, Button, Card } from "@heroui/react";
import { HeartIcon } from "../components/HeartIcon";
import { BookmarkIcon } from "../components/SavedIcon";

const images = [
  "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
  "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
  "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
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
        <h1 className="text-3xl font-bold mb-4">Название товара</h1>
        <p className="text-lg mb-2">Категория: Women sneakers</p>
         <p className="text-lg mb-2">Brand</p>
        <p className="text-lg mb-2">Size</p>
        <p className="text-lg mb-2">Color</p>
        <p className="text-lg mb-2">Condition</p>
        <p className="text-base mb-4">
          Описание товара. Здесь можно рассказать об особенностях, материалах,
          преимуществах и т.д.
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
                 marginBottom: "20px"}}>Bestsellers</div>
                 
                 <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>
    </div>
    <Footer/>
    </>
  );
}