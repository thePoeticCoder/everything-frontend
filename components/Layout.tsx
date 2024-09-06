import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <Sidebar />
    <main className="flex-1 p-4">{children}</main>
    <Footer />
  </div>
);

export default Layout;
