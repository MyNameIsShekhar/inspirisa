import { NavLink } from "react-router-dom";
import { links } from "@/data/links";
import { BadgeSecondary, BadgeOutline } from "@/components/ui/badge";

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
              <BadgeOutline>{link.label}</BadgeOutline>
            )
          )}
        </NavLink>
      ))}
    </div>
  );
}
