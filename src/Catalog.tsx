import {Card, Image} from "@heroui/react";

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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, max-content))",
        gap: "16px",
        padding: "16px",
        justifyContent: "start",
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          isBlurred
          shadow="sm"
          className="border-none bg-background/60 dark:bg-default-100/50 p-0 overflow-hidden"
          style={{ width: "220px" }}
        >
          <div className="w-full h-[60%]">
            <Image
              alt="Product image"
              className="object-cover w-full h-full"
              width={250}
              src={product.imageUrl}
            />
          </div>

          <div className="p-3 flex flex-col justify-between h-[40%] w-full">
            <span className="text-[10px] text-primary font-semibold uppercase">
              {product.label}
            </span>
            <h2 className="text-sm font-semibold text-foreground">
              {product.title}
            </h2>
            <p className="text-xs text-foreground/70">{product.category}</p>
            <p className="text-sm font-bold text-success">{product.price}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
