import React, { FC } from "react";

interface DashboardPageHeaderProps {
  // Add your prop types here
  title: string;
  subtitle: string;
}

const DashboardPageHeader: FC<DashboardPageHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex border-b shadow-sm ">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex p-4 ">
          <div className="flex flex-col ">
            <div className="text-2xl font-semibold">{title}</div>
            <div className="text-sm text-gray-600">{subtitle}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPageHeader;
