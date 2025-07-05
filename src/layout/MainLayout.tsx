// src/layout/MainLayout.tsx
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Rightbar from "../components/Rightbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col w-full max-w-[1000px] h-screen bg-white shadow-sm">
        <Header />
        <div className="flex flex-col lg:flex-row flex-grow justify-between">
          <Sidebar />
          <main className="px-3 mt-1.5 w-full lg:w-[620px]">{children}</main>
          <Rightbar />
        </div>
        <Footer />
      </div>
    </div>
  );
}
