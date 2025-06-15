import MegaMenu from "./MegaMenu";

export default function NavigationMenu() {
  return (
    <div style={{borderBottom: "1px solid #e5e7eb"}}>
        <div className="flex space-x-6 px-[145px]">
              <MegaMenu
        title="Menswear"
        categories={[
          {
            heading: "Clothing",
            links: [
              { label: "T-Shirts", href: "#" },
              { label: "Jackets", href: "#" },
              { label: "Jeans", href: "#" },
            ],
          },
          {
            heading: "Accessories",
            links: [
              { label: "Hats", href: "#" },
              { label: "Belts", href: "#" },
              { label: "Watches", href: "#" },
            ],
          },
          {
            heading: "Shoes",
            links: [
              { label: "Sneakers", href: "#" },
              { label: "Boots", href: "#" },
              { label: "Sandals", href: "#" },
            ],
          },
        ]}
        image="/images/menswear-banner.jpg"
      />

      <MegaMenu
        title="Womenswear"
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
        </div>
    
    </div>
  );
}
