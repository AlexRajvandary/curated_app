// components/ProductCard.tsx
import { Card, Image } from "@heroui/react";;

interface ProductCardProps {
  imageSrc: string;
  title: string;
  label: string;
  category: string;
  price: string;
}

export default function ProductCard({
  imageSrc,
  title,
  label,
  category,
  price,
}: ProductCardProps) {
  return (
    <Card
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
          src={imageSrc}
        />
      </div>

      <div className="p-3 flex flex-col justify-between h-[40%] w-full">
        <span className="text-[10px] text-primary font-semibold uppercase">
          {label}
        </span>
        <h2 className="text-sm font-semibold text-foreground">{title}</h2>
        <p className="text-xs text-foreground/70">{category}</p>
        <p className="text-sm font-bold text-success">{price}</p>
      </div>
    </Card>
  );
}
