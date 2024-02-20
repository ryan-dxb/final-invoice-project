import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface SidebarItemProps {
  // Add your prop types here
  active?: boolean;
  icon: LucideIcon;
  href: string;
  title: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  icon: Icon,
  active,
  href,
  title,
}) => {
  return (
    <li
      className={cn(
        "flex flex-row items-center px-4 w-full h-14 rounded-md cursor-pointer transition-colors duration-200 ease-in-out hover:bg-primary/10",
        active ? "bg-primary/10" : "hover:bg-primary/10"
      )}
    >
      <Link href={href} className="flex space-x-2">
        <Icon size={20} strokeWidth={1.5} />
        <span className="text-sm font-medium ">{title}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
