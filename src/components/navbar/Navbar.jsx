import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const links = [
  { path: "/temp", label: "CONTACT" },
  { path: "/temp", label: "BLOG & EVENTS" },
];

export default function Navbar() {
  return (
    <nav className="">
      <section className="bg-primary flex flex-row-reverse gap-8 my-section items-center">
        <Button variant="secondary" className="rounded-full">
          CRATE AN ACCOUNT
        </Button>
        {links.map((link, index) => (
          <Button
            key={index}
            variant="link"
            className="text-background has-[.pending]:text-muted-foreground has-[.active]:decoration-primary-foreground has-[.active]:underline has-[.active]:underline-offset-4 p-0 h-fit"
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
      <section className="flex items-center justify-between my-section">
        <div>
          <img src="/nav_logo.svg" alt="" className="h-12" />
        </div>
        <div>
          <NavLinks />
        </div>
      </section>
    </nav>
  );
}
