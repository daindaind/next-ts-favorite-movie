import Navbar from "@/components/common/Navbar";
import React from "react";

function HomeLayout({ children }: {children: JSX.Element | JSX.Element[]}) {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-light-white">
      <Navbar />
      <div className="flex flex-col flex-1 h-full">{children}</div>
    </div>
  );
}

export default HomeLayout;
