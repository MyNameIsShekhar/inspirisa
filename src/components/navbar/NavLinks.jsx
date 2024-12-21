import { NavLink } from "react-router-dom";
import { links } from "@/data/links";
import { Button } from "../ui/button";

export default function NavLinks() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
      {links.map((link, index) => (
        <Button
          key={index}
          variant="link"
          className="text-button text-foreground has-[.pending]:text-muted-foreground has-[.active]:decoration-primary has-[.active]:underline has-[.active]:underline-offset-4 p-0 h-fit has-[.active]:decoration-2"
        >
          <NavLink
            to={link.path}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active w-full text-pink-500 bg-gray-200 border-b-4 border-pink-500 rounded-md px-2 py-1 transition-all duration-300" : ""
            }
          >
            {link.label}
          </NavLink>
        </Button>
      ))}
    </div>
  );
}
