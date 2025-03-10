import React, { PropsWithChildren } from "react";
import Footer from "../features/footer";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main /* className="w-full min-h-screen flex flex-col" */>{children}</main>
  );
};

export default RootLayout;
