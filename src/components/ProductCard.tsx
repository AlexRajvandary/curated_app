// components/ProductCard.tsx
import { Card, Image} from "@heroui/react";;
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "./HeartIcon";

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
  radius="none"
  isPressable
  isBlurred
  shadow="sm"
  className="border-none bg-background/60 dark:bg-default-100/50 p-0 overflow-hidden"
  style={{ width: "240px" }}
  onPress={() => navigate(href)}
>
  {/* Картинка */}
  <div className="w-full h-[220px] overflow-hidden">
    <Image
      radius="none"
      alt="Product image"
      className="object-cover w-full h-full"
      src={imageSrc}
      isZoomed
    />
  </div>

  {/* Текстовая часть */}
  <div className="p-3 flex flex-col gap-1 text-left bg-white">
    <span className="text-[10px] text-primary font-semibold uppercase">
      {label}
    </span>
    <h2 className="text-sm font-semibold text-foreground line-clamp-2">{title}</h2>
    <p className="text-xs text-foreground/70">{category}</p>
    <div className="flex items-center justify-between pt-2">
      <p className="text-md font-bold">{price}</p>
      <HeartIcon fill="white" strokeColor="black" size={22} />
    </div>
  </div>
</Card>

  );
}
