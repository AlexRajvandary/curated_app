// components/ProductCard.tsx
import { Card, Image} from "@heroui/react";;
import { useNavigate } from "react-router-dom";
import { HeartIcon } from "./HeartIcon";
import { useState } from "react";

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
   const [liked, setLiked] = useState(false);
   const navigate = useNavigate();
  return (
  <Card
  radius="none"
  isPressable
  isBlurred
  shadow="sm"
  className="border-none bg-background/60 dark:bg-default-100/50 p-0 overflow-hidden"
  style={{ width: "240px" }}
>
  {/* Картинка */}
  <div className="w-full h-[220px] overflow-hidden"  onClick={() => navigate(href)}>
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
    <h2 className="text-sm font-semibold text-foreground line-clamp-2" onClick={() => navigate(href)}>{title}</h2>
    <p className="text-xs text-foreground/70" onClick={() => navigate(href)}>{category}</p>
    <div className="flex items-center justify-between pt-2">
      <p className="text-md font-bold" onClick={() => navigate(href)}>{price}</p>
      <button onClick={() => setLiked(!liked)}>
        <HeartIcon
        isFilled={liked}
        filledColor="red"
        strokeColor={liked ? "red" : "black"}
        size={22}
      />
      </button>
       
    </div>
  </div>
</Card>

  );
}
