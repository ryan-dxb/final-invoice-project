import React, { FC } from "react";
import Logo from "../common/Logo";
import { MenuIcon, UserRoundIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import HeaderDropDown from "./HeaderDropDown";

interface HeaderProps {
  // Add your prop types here
}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="h-16 border-b-[0.1px] border-slate-50 shadow-sm fixed top-0 left-0 right-0 flex flex-row">
      <div className="w-64 border-r-[0.1px] border-slate-50 ">
        <Logo />
      </div>
      <div className="flex flex-1 justify-between px-4 items-center">
        <MenuIcon size={24} strokeWidth={1.5} />

        <HeaderDropDown>
          <div className="flex items-center space-x-3 px-4 cursor-pointer hover:bg-primary/10 py-2 rounded-md transition duration-200 ease-in-out">
            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-gray-500">
              <div className="flex items-center justify-center rounded-full w-8 h-8 bg-white">
                <Avatar className="w-7 h-7">
                  <AvatarFallback>
                    <UserRoundIcon size={24} strokeWidth={1.5} />
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">John Doe</span>
              <span className="text-xs">johndoe@test.com</span>
            </div>
          </div>
        </HeaderDropDown>
      </div>
    </header>
  );
};

export default Header;
