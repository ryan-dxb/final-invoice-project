import { Receipt } from "lucide-react";
import React, { FC } from "react";

interface LogoProps {
  // Add your prop types here
}

const Logo: FC<LogoProps> = () => {
  return (
    <div className="flex items-center justify-center h-16 ">
      <div className="">
        <Receipt size={28} />
      </div>
      <p>
        <span className="text-xl font-bold">Next</span> Invoice
      </p>
    </div>
  );
};

export default Logo;
