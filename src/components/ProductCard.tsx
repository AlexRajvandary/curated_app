// components/ProductCard.tsx
import { Card, Image} from "@heroui/react";;
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  imageSrc: string;
  title: string;
  label: string;
  category: string;
  price: string;
  href: string;
}

export default function ProductCard({
  imageSrc,
  title,
  label,
  category,
  price,
  href
}: ProductCardProps) {
   const navigate = useNavigate();
  return (
    <Card
      isPressable
      isBlurred
      shadow="sm"
      className="border-none bg-background/60 dark:bg-default-100/50 p-0 overflow-hidden"
      style={{ width: "220px" }}
      onPress={() => navigate(href)}
    >
      <div className="w-full h-[60%]">
        <Image
          alt="Product image"
          className="object-cover w-full h-full"
          width={250}
          src={imageSrc}
          isZoomed
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
