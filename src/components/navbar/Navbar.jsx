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
        className={`z-50 bg-primary flex flex-row-reverse gap-2 sm:gap-4 md:gap-8 my-nav-section items-center transition-transform duration-300 ease-in-out relative delay-100 ${
          show ? "translate-y-0" : "shadow-lg translate-y-[-100%]"
        }`}
      >
        {links.map((link, index) => (
          <Button
            key={index}
            variant="link"
            className="text-button text-background has-[.pending]:text-muted-foreground has-[.active]:decoration-primary-foreground has-[.active]:underline has-[.active]:underline-offset-4 p-0 h-fit"
          >
            <NavLink
              to={link.path}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active w-full" : ""
              }
            >
              {link.label}
            </NavLink>
          </Button>
        ))}
      </section>
      <section
        className={`z-40 flex items-center justify-between my-nav-section bg-background transition-transform duration-300 ease-in-out delay-0 relative ${
          show ? "translate-y-0" : "translate-y-[-200%]"
        }`}
      >
        <div>
          <img src="/nav_logo.svg" alt="" className="h-12" />
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
