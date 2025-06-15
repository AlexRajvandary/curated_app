import "./styles.css";
import React from "react";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Divider,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Avatar,
  DropdownItem
} from "@heroui/react";
import type { JSX } from "react/jsx-runtime";
import ProductCard from "./ProductCard";
import Carousel from "./Carousel"
import NavigationMenu from "./NavigationMenu";
import ImageCarousel from "./ImageCarousel"

type BackdropType =  "opaque" | "transparent" | "blur";

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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [backdrop, setBackdrop] = React.useState<BackdropType>("opaque");
  const [isVisible, setIsVisible] = React.useState(false);
  // eslint-disable-next-line no-empty-pattern
  const [] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleOpen = (backdrop: BackdropType) => {
    setBackdrop(backdrop);
    onOpen();
  };
   const [user, setUser] = useState<null | { name: string; avatar: string }>(null);
   const handleLogin = () => {
    setUser({ name: "Aleks", avatar: "/avatar.jpg" });
  };

  const handleLogout = () => {
    setUser(null);
  };
  const menuItems = [
    "Menswear",
    "Womenswear",
    "Kids",
    "Brands",
    "Sales"
  ];

 const products = [
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
  },
   {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg",
    title: "Gazelle Indoor Shoes",
    label: "Bestseller",
    category: "Women sneakers",
    price: "$129.99",
  },
  {
    imageSrc: "https://assets.adidas.com/images/w_1880,f_auto,q_auto/2c6e7fe3f66d4bdda664d1030d28c9f9_9366/JQ7409_01_00_standard.jpg.",
    title: "Samba OG",
    label: "New",
    category: "Men sneakers",
    price: "$109.99",
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
 <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden navbar-burger"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Curated</p>
        </NavbarBrand>
          <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} width={undefined} height={undefined} />}
          type="search"
          variant="bordered"
          radius="full"
        />
      </NavbarContent>

    
      <NavbarContent justify="end">
        {!user ? (
        <>
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#"
              variant="flat"
              onPress={() => handleOpen("blur")}
            >
              Login
            </Button>
            <Button
              as={Link}
              color="default"
              href="#"
              variant="flat"
              style={{ marginLeft: "10px" }}
            >
              Sign Up
            </Button>
          </NavbarItem>
        </>
      ) : (
        <NavbarItem>
           <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-10 gap-2">
            <p className="font-semibold">Signed in</p>
          </DropdownItem>
          <DropdownItem key="view_profile" color="primary">View profile</DropdownItem>
          <DropdownItem key="my_messages" color="primary">My messages</DropdownItem>
          <DropdownItem key="favorites" color="primary">Favorites</DropdownItem>
          <DropdownItem key="cart" color="primary">Cart</DropdownItem>
          <DropdownItem key="orders" color="primary">Orders</DropdownItem>
          <DropdownItem key="settings" color="primary">Settings</DropdownItem>
          <DropdownItem key="logout" color="danger" className="text-danger" onPress={handleLogout}>
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
        </NavbarItem>
      )}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
   <NavigationMenu/>
     <ImageCarousel images={imageUrls} />
      <div  style={{
        marginLeft: "160px",
        marginRight: "160px",
        marginTop: "20px",
        marginBottom: "20px"}}>

          <div style={{
              fontSize: "30px",
              marginBottom: "20px"}}>Bestsellers</div>
              
              <Carousel items={products.map((p, i) => (<ProductCard key={i} {...p} />))} visibleSlides={5}/>

 <div style={{
        fontSize: "30px",
        marginTop: "20px",
        marginBottom: "20px"
  }}>Shop by price</div>

      </div>
 

     
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Login to your account</ModalHeader>
              <ModalBody>
                <Input label="Email" type="email" variant="bordered"/>
                 <Input
   
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label="Password"
      
      type={isVisible ? "text" : "password"}
      variant="bordered"
    />
    <Button size="lg" color="default" variant="faded" onPress={handleLogin}>
      Log in
    </Button>
        <Divider className="my-4" />
         
    <Button size="lg" color="default" variant="faded">
   <svg xmlns="http://www.w3.org/2000/svg" height="21" viewBox="0 0 24 24" width="21"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                  Login with Google
    </Button>
              </ModalBody>
              <ModalFooter>
                Don't have an account? 
                 <Link href="#" underline="always">
                  Sign up
                  </Link>
               
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
   
  );
}

