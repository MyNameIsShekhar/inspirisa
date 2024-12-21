import { NavLink } from "react-router-dom";
import { links } from "@/data/links";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function BadgeSecondary({ children }) {
  return <Badge variant="secondary">{children}</Badge>;
}

export default function NavLinks() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
      {links.map((link, index) => (
        <NavLink
          to={link.path}
          key={index}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active w-full" : ""
          }
        >
          {({ isActive }) => (
            isActive ? (
              <BadgeSecondary>{link.label}</BadgeSecondary>
            ) : (
              <Button variant="link" className="text-button text-foreground p-0 h-fit">
                {link.label}
              </Button>
            )
          )}
        </NavLink>
      ))}
    </div>
  );
}
