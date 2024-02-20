import Logo from "@/components/common/Logo";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowLeftFromLineIcon,
  LayoutDashboard,
  MenuIcon,
  UserIcon,
  UserRoundIcon,
} from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar />
      <Header />
      <main className="ml-64 my-16 max-w-[calc(100%-256px)] w-full bg-secondary">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
