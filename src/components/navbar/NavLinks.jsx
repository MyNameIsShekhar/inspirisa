import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export const links = [
  { path: "/", label: "Home" },
  { path: "/temp", label: "COURSES" },
  { path: "/temp", label: "CERTIFICATIONS" },
  { path: "/temp", label: "GLOBAL COMMUNITY" },
  { path: "/temp", label: "BUSINESS EXCURSIONS" },
  { path: "/temp", label: "SAUDI VISION 2030" },
  { path: "/temp", label: "BUSINESS PARTNERS" },
];

export default function NavLinks() {
  return (
    <div className="flex gap-4">
      {links.map((link, index) => (
        <Button
          key={index}
          variant="link"
          className="text-button text-foreground has-[.pending]:text-muted-foreground has-[.active]:decoration-primary has-[.active]:underline has-[.active]:underline-offset-4 p-0 h-fit "
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
