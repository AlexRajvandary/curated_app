import { Card, Image } from "@heroui/react";

type Product = {
  id: number;
  title: string;
  category: string;
  price: string;
  label: string;
  imageUrl: string;
};

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <div className="flex-1">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, max-content))",
          gap: "16px",
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
            <div className="w-full">
              <Image
                alt="Product image"
                className="object-cover w-full h-full"
                width={250}
                src={product.imageUrl}
              />
            </div>

            <div className="p-3 flex flex-col justify-between w-full">
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
    </div>
  );
}
