import { NavLink } from "react-router-dom";
import { links } from "@/data/links";
import { Button } from "../ui/button";

export default function NavLinks() {
  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <Button
          key={index}
          variant="link"
          className="text-button text-foreground has-[.pending]:text-muted-foreground has-[.active]:decoration-primary has-[.active]:underline has-[.active]:underline-offset-4 p-0 h-fit has-[.active]:decoration-2"
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
    </div>
  );
}
