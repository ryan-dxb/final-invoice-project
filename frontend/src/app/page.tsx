import React from "react";
import { NextPage } from "next";
import Logo from "@/components/common/Logo";

interface HomeProps {
  // Add your prop types here
}

const Home: NextPage<HomeProps> = () => {
  return (
    <div>
      <Logo />
    </div>
  );
};

export default Home;
