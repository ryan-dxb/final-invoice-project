import React, { FC } from "react";
import Logo from "../common/Logo";
import Link from "next/link";
import {
  LayoutDashboardIcon,
  ReceiptTextIcon,
  UserCogIcon,
  UsersIcon,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { buttonVariants } from "../ui/button";

interface SidebarProps {
  // Add your prop types here
}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <aside className="fixed flex-col flex top-16 bottom-0 left-0 w-64 border-r-[0.1px] border-slate-50 ">
      <nav className="flex flex-col ">
        <ul className="flex flex-col px-4 space-y-1 mt-4">
          <SidebarItem
            active
            icon={LayoutDashboardIcon}
            href="/dashboard"
            title="Dashboard"
          />
          <SidebarItem icon={UsersIcon} href="/customers" title="Customers" />
          <SidebarItem
            icon={ReceiptTextIcon}
            href="/invoices"
            title="Invoices"
          />
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        {/* <li
      className={cn(
        "flex flex-row  w-full h-14   space-x-2 rounded-md cursor-pointer",
        active ? "bg-primary/10" : "hover:bg-primary/10"
      )}
    > */}
        <Link
          href="/profile"
          className={buttonVariants({
            variant: "outline",
            className:
              "flex items-center justify-center w-full  px-4 py-auto h-14 hover:bg-primary/10 rounded-md cursor-pointer",
          })}
        >
          <div className="flex flex-row w-full space-x-2">
            <UserCogIcon size={24} strokeWidth={1.5} />
            <span className="text-sm font-medium ">Manage Profile</span>
          </div>
        </Link>
        {/* </li> */}
      </div>
    </aside>
  );
};

export default Sidebar;
