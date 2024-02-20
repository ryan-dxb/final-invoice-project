import React, { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import {
  LayoutDashboardIcon,
  LogOutIcon,
  ReceiptTextIcon,
  UsersIcon,
  UserRoundIcon,
} from "lucide-react";

interface HeaderDropDownProps {
  // Add your prop types here
  children: React.ReactNode;
}

const HeaderDropDown: FC<HeaderDropDownProps> = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mt-1">
        <DropdownMenuLabel>
          <h1 className="text-xs font-medium uppercase">John Doe</h1>
          <p>
            <span className="text-xs font-normal">
              Project Manager at <span className="">Acme</span>
            </span>
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserRoundIcon className="w-4 h-4 mr-2" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LayoutDashboardIcon className="w-4 h-4 mr-2" />
            <span>Dashboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UsersIcon className="w-4 h-4 mr-2" />
            <span>Customers</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <ReceiptTextIcon className="w-4 h-4 mr-2" />
            <span>Invoices</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon className="w-4 h-4 mr-2" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropDown;
