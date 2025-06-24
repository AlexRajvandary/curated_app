import "../styles.css";
import type { JSX } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel"
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel"
import Footer from '../components/Footer';
import CategorySection from "../components/CategorySection";
import React from "react";

type SearchIconProps = {
  size?: number;
  strokeWidth?: number;
  width?: number | string;
  height?: number | string;
  [key: string]: unknown;  // для остальных props (если нужны)
};

export const SearchIcon: React.FC<SearchIconProps> = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
export const EyeSlashFilledIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.2714 9.17834C20.9814 8.71834 20.6714 8.28834 20.3514 7.88834C19.9814 7.41834 19.2814 7.37834 18.8614 7.79834L15.8614 10.7983C16.0814 11.4583 16.1214 12.2183 15.9214 13.0083C15.5714 14.4183 14.4314 15.5583 13.0214 15.9083C12.2314 16.1083 11.4714 16.0683 10.8114 15.8483C10.8114 15.8483 9.38141 17.2783 8.35141 18.3083C7.85141 18.8083 8.01141 19.6883 8.68141 19.9483C9.75141 20.3583 10.8614 20.5683 12.0014 20.5683C13.7814 20.5683 15.5114 20.0483 17.0914 19.0783C18.7014 18.0783 20.1514 16.6083 21.3214 14.7383C22.2714 13.2283 22.2214 10.6883 21.2714 9.17834Z"
        fill="currentColor"
      />
      <path
        d="M14.0206 9.98062L9.98062 14.0206C9.47062 13.5006 9.14062 12.7806 9.14062 12.0006C9.14062 10.4306 10.4206 9.14062 12.0006 9.14062C12.7806 9.14062 13.5006 9.47062 14.0206 9.98062Z"
        fill="currentColor"
      />
      <path
        d="M18.25 5.74969L14.86 9.13969C14.13 8.39969 13.12 7.95969 12 7.95969C9.76 7.95969 7.96 9.76969 7.96 11.9997C7.96 13.1197 8.41 14.1297 9.14 14.8597L5.76 18.2497H5.75C4.64 17.3497 3.62 16.1997 2.75 14.8397C1.75 13.2697 1.75 10.7197 2.75 9.14969C3.91 7.32969 5.33 5.89969 6.91 4.91969C8.49 3.95969 10.22 3.42969 12 3.42969C14.23 3.42969 16.39 4.24969 18.25 5.74969Z"
        fill="currentColor"
      />
      <path
        d="M14.8581 11.9981C14.8581 13.5681 13.5781 14.8581 11.9981 14.8581C11.9381 14.8581 11.8881 14.8581 11.8281 14.8381L14.8381 11.8281C14.8581 11.8881 14.8581 11.9381 14.8581 11.9981Z"
        fill="currentColor"
      />
      <path
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const EyeFilledIcon = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
        fill="currentColor"
      />
      <path
        d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const HeartIcon = ({
  size = 24,
  width = 24,
  height = 24,
  strokeWidth = 1.5,
  fill = "none",
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill={fill}
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {

 const products = [
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/66688f71562d46939932e6f3d58a654c?w=800",
    title: "Dior",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/7091b3adf6b0496795fe9bf0af550a9d?w=800",
    title: "Enfants Riches Deprimes",
    label: "New",
    category: "T-Shirt",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/e1fb8280f2a645b9b7735ba29be88bdd?w=800",
    title: "Dior Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
    href: "/product"
  },
  {
    imageSrc: "https://media-assets.grailed.com/prd/listing/48549855/b40a8af8b5ec4e3295dd5cda53501b1f?w=800",
    title: "Ballenciaga",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
    href: "/product"
  },
   {
    imageSrc: "https://media-assets.grailed.com/prd/listing/temp/df113a4515bf442295a74f9199c93020?w=800",
    title: "Monclere",
    label: "Bestseller",
    category: "Moncler Maya Jacket",
    price: "549.99",
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
const imageUrls = [
  "https://images.ctfassets.net/bdvz0u6oqffk/14JslSfkm5ns5KNHTBzUrv/551583ef6795a046e688ab01b5a0349a/Best-of-Jerseys-desktop.jpg",
  "https://images.ctfassets.net/bdvz0u6oqffk/6noZNgqPbLeLihFEt7StGR/2154838cdf55d45699364791f4b3c76b/Emerging-desktop.jpg",
  "https://images.ctfassets.net/bdvz0u6oqffk/MK894FrtGC9Evdpi7OweG/1452248bd227e07506de000f28c70e1c/Trompe-loeil-desktop.jpg"
]
  return (
    <div>
      <Header/>
      <ImageCarousel images={imageUrls} />
      <div  style={{
        marginLeft: "160px",
        marginRight: "160px",
        marginTop: "20px",
        marginBottom: "20px"}}>

          <div style={{
              fontSize: "30px",
              marginBottom: "20px"}}>Bestsellers</div>
              
              <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} href={p.href}/>))} visibleSlides={5}/>

 <div style={{
        fontSize: "30px",
        marginTop: "20px",
        marginBottom: "20px"
  }}>Shop by category</div>
      <CategorySection/>
      </div>
      <Footer/>
</div>
  );
}