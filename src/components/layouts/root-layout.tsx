import React, { PropsWithChildren } from "react";
import Footer from "../features/footer";
import { Navbar } from "../features/navbar";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-12">
          {children}
        </div>
      </main>
    </>
  );
};

export default RootLayout;
