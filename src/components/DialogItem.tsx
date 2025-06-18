import React from "react";
import { Avatar } from "@heroui/react";

interface DialogItemProps {
  avatarSrc?: string;
  name: string;
  subtitle?: string;
}

const DialogItem: React.FC<DialogItemProps> = ({ avatarSrc, name, subtitle }) => {
  return (
    <div className="flex items-center bg-white rounded w-full">
      <Avatar className="h-10 w-10" src={avatarSrc} />
      <div className="flex flex-col pl-4 pb-2">
        <p className="text-md font-semibold">{name}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
};

export default DialogItem;
