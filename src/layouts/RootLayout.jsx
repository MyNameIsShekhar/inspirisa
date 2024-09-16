import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <ScrollRestoration />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
