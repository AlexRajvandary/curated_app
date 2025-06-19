import MegaMenu from "./MegaMenu";

export default function NavigationMenu() {
  return (
    <div style={{borderBottom: "1px solid #e5e7eb"}}>
        <div className="flex space-x-6 px-[145px]">
              <MegaMenu
        title="Menswear"
        categories={[
          {
            heading: "Tops",
            links: [
              { label: "Long Sleeve T-Shirts", href: "#" },
              { label: "Polos", href: "#" },
              { label: "Shirts (Button Ups)", href: "#" },
              { label: "Short Sleeve T-Shirts", href: "#" },
              { label: "Sweaters & Knitwear", href: "#" },
              { label: "Sweatshirts & Hoodies", href: "#" },
              { label: "Tank Tops & Sleeveless", href: "#" },
              { label: "Jerseys", href: "#" },
            ],
          },
          {
            heading: "Bottoms",
            links: [
              { label: "Casual Pants", href: "#" },
              { label: "Cropped Pants", href: "#" },
              { label: "Denim", href: "#" },
              { label: "Leggings", href: "#" },
              { label: "Overalls & Jumpsuits", href: "#" },
              { label: "Shorts", href: "#" },
              { label: "Sweatpants & Joggers", href: "#" },
              { label: "Swimwear", href: "#" }
            ],
          },
          {
            heading: "Outerwear",
            links: [
                { label: "Bombers", href: "#" },
              { label: "Cloaks & Capes", href: "#" },
              { label: "Denim Jackets", href: "#" },
              { label: "Heavy Coats", href: "#" },
              { label: "Leather Jackets", href: "#" },
              { label: "Light Jackets", href: "#" },
              { label: "Parkas", href: "#" },
              { label: "Raincoats", href: "#" },
               { label: "Vests", href: "#" }
            ],
          },
          {
            heading: "Footwear",
            links: [
                { label: "Boots", href: "#" },
              { label: "Casual Leather Shoes", href: "#" },
              { label: "Formal Shoes", href: "#" },
              { label: "Hi-Top Sneakers", href: "#" },
              { label: "Low-Top Sneakers", href: "#" },
              { label: "Sandals", href: "#" },
              { label: "Slip Ons", href: "#" }
            ],
          },
          {
            heading: "Accessories",
            links: [
              { label: "Bags & Luggage", href: "#" },
              { label: "Belts", href: "#" },
              { label: "Glasses", href: "#" },
              { label: "Gloves & Scarves", href: "#" },
              { label: "Hats", href: "#" },
              { label: "Jewelry & Watches", href: "#" },
              { label: "Wallets", href: "#" },
              { label: "Miscellaneous", href: "#" },
              { label: "Socks & Underwear", href: "#" },
              { label: "Sunglasses", href: "#" },
              { label: "Ties & Pocketsquares", href: "#" }
            ],
          },
          {
            heading: "Tailoring",
            links: [
              { label: "Blazers", href: "#" },
              { label: "Formal Shirting", href: "#" },
              { label: "Formal Trousers", href: "#" },
              { label: "Suits", href: "#" },
              { label: "Tuxedos", href: "#" },
              { label: "Vests", href: "#" }
            ],
          },
        ]}
      />

      <MegaMenu
        title="Womenswear"
        categories={[
           {
            heading: "Tops",
            links: [
              { label: "Blouses", href: "#" },
              { label: "Bodysuits", href: "#" },
              { label: "Button Ups", href: "#" },
              { label: "Crop Tops", href: "#" },
              { label: "Hoodies", href: "#" },
              { label: "Long Sleeve T-Shirts", href: "#" },
              { label: "Polos", href: "#" },
              { label: "Short Sleeve T-Shirts", href: "#" },
              { label: "Sweaters", href: "#" },
              { label: "Sweatshirts", href: "#" },
              { label: "Tank Tops", href: "#" }
            ],
          },
          {
            heading: "Bottoms",
            links: [
              { label: "Jeans", href: "#" },
              { label: "Jumpsuits", href: "#" },
              { label: "Leggings", href: "#" },
              { label: "Maxi Skirts", href: "#" },
              { label: "Midi Skirts", href: "#" },
              { label: "Mini Skirts", href: "#" },
              { label: "Pants", href: "#" },
              { label: "Shorts", href: "#" },
              { label: "Dresses", href: "#" },
              { label: "Mini Dresses", href: "#" },
              { label: "Midi Dresses", href: "#" },
              { label: "Maxi Dresses", href: "#" },
              { label: "Gowns", href: "#" }
            ],
          },
          {
            heading: "Outerwear",
            links: [
              { label: "Blazers", href: "#" },
              { label: "Bombers", href: "#" },
              { label: "Coats", href: "#" },
              { label: "Denim Jackets", href: "#" },
              { label: "Down Jackets", href: "#" },
              { label: "Fur & Faux Fur", href: "#" },
              { label: "Jackets", href: "#" },
              { label: "Leather Jackets", href: "#" },
              { label: "Rain Jackets", href: "#" },
              { label: "Vests", href: "#" }
            ],
          },
          {
            heading: "Footwear",
            links: [
              { label: "Boots", href: "#" },
              { label: "Heels", href: "#" },
              { label: "Platforms", href: "#" },
              { label: "Mules", href: "#" },
              { label: "Flats", href: "#" },
              { label: "Hi-Top Sneakers", href: "#" },
              { label: "Low-Top Sneakers", href: "#" },
              { label: "Sandals", href: "#" },
              { label: "Slip Ons", href: "#" }
            ],
          },
          {
            heading: "Accessories",
            links: [
              { label: "Belts", href: "#" },
              { label: "Glasses", href: "#" },
              { label: "Gloves & Scarves", href: "#" },
              { label: "Hair Accessories", href: "#" },
              { label: "Hats", href: "#" },
              { label: "Jewelry & Watches", href: "#" },
              { label: "Wallets", href: "#" },
              { label: "Watches", href: "#" },
              { label: "Miscellaneous", href: "#" },
              { label: "Socks & Intimates", href: "#" },
              { label: "Sunglasses", href: "#" }
            ],
          },
          {
            heading: "Bags",
            links: [
              { label: "Backpacks", href: "#" },
              { label: "Belt Bags", href: "#" },
              { label: "Bucket Bags", href: "#" },
              { label: "Clutches", href: "#" },
              { label: "Crossbody Bags", href: "#" },
              { label: "Handle Bags", href: "#" },
              { label: "Hobo Bags", href: "#" },
              { label: "Luggage & Travel", href: "#" },
              { label: "Messengers & Satches", href: "#" },
              { label: "Mini Bags", href: "#" },
              { label: "Shoulder Bags", href: "#" },
              { label: "Tote Bags", href: "#" },
              { label: "Other", href: "#" }
            ],
          },
        ]}
      />

       <MegaMenu
        title="Kids"
        categories={[
          {
            heading: "Dresses",
            links: [
              { label: "Evening", href: "#" },
              { label: "Summer", href: "#" },
              { label: "Casual", href: "#" },
            ],
          },
          {
            heading: "Accessories",
            links: [
              { label: "Bags", href: "#" },
              { label: "Jewelry", href: "#" },
              { label: "Scarves", href: "#" },
            ],
          },
          {
            heading: "Shoes",
            links: [
              { label: "Heels", href: "#" },
              { label: "Flats", href: "#" },
              { label: "Sneakers", href: "#" },
            ],
          },
        ]}
        image="/images/womenswear-banner.jpg"
      />

       <MegaMenu
        title="Sales"
        categories={[
          {
            heading: "Dresses",
            links: [
              { label: "Evening", href: "#" },
              { label: "Summer", href: "#" },
              { label: "Casual", href: "#" },
            ],
          },
          {
            heading: "Accessories",
            links: [
              { label: "Bags", href: "#" },
              { label: "Jewelry", href: "#" },
              { label: "Scarves", href: "#" },
            ],
          },
          {
            heading: "Shoes",
            links: [
              { label: "Heels", href: "#" },
              { label: "Flats", href: "#" },
              { label: "Sneakers", href: "#" },
            ],
          },
        ]}
        image="/images/womenswear-banner.jpg"
      />

        <MegaMenu
        title="Brands"
        categories={[
          {
            links: [
              { label: "Acne Studios", href: "#" },
              { label: "Amiri", href: "#" },
              { label: "Arc'teryx", href: "#" },
              { label: "Balenciaga", href: "#" },
              { label: "Bape", href: "#" },
              { label: "Bottega Veneta", href: "#" },
              { label: "Carhartt", href: "#" },
              { label: "Celine", href: "#" },
            ],
          },
          {
            
            links: [
              { label: "Chanel", href: "#" },
              { label: "Chrome Hearts", href: "#" },
              { label: "Comme des Garcons", href: "#" },
              { label: "Dior", href: "#" },
              { label: "Enfants Riches Deprimes", href: "#" },
              { label: "Gucci", href: "#" },
              { label: "Kapital", href: "#" },
              { label: "Louis Vuitton", href: "#" },
            ],
          },
          {
            
            links: [
              { label: "Maison Margiela", href: "#" },
              { label: "Moncler", href: "#" },
              { label: "Nike", href: "#" },
              { label: "Polo Ralph Lauren", href: "#" },
              { label: "Prada", href: "#" },
              { label: "Raf Simons", href: "#" },
              { label: "Rick Owens", href: "#" },
              { label: "Saint Laurent Paris", href: "#" },
            ],
          },
           {
            
            links: [
              { label: "Stone Island", href: "#" },
              { label: "Stussy", href: "#" },
              { label: "Supreme", href: "#" },
              { label: "Undercover", href: "#" },
              { label: "Vetements", href: "#" },
              { label: "Vintage", href: "#" },
              { label: "Vivienne Westwood", href: "#" },
              { label: "Yohji Yamamoto", href: "#" },
            ],
          },
        ]}
      />
        </div>
    
    </div>
  );
}
