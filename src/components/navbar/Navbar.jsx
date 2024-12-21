import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

const links = [
  { path: "/temp", label: "CONTACT" },
  { path: "/temp", label: "BLOG & EVENTS" },
];

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`sticky top-0 z-30 transition-transform duration-300 ease-in-out delay-200 ${
        show ? "translate-y-0" : "translate-y-[-100%]"
      }`}
    >
      
      <section
        className={`z-40 flex items-center justify-between my-nav-section bg-background transition-transform duration-300 ease-in-out delay-0 relative ${
          show ? "translate-y-0" : "translate-y-[-200%]"
        }`}
      >
        <div>
          <span className="h-12 text-2xl font-bold" style={{ fontFamily: 'Lobster, sans-serif' }}>Rugi Empire</span>
        </div>
        <div>
          <div className="hidden lg:block">
            <NavLinks />
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </section>
    </nav>
  );
}
