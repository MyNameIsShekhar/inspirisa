import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-svh section max-w-screen-2xl">
      <Navbar />
      <ScrollRestoration />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
