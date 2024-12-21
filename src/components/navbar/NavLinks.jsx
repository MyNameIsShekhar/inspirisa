import { NavLink } from "react-router-dom";
import { links } from "@/data/links";
import { Button } from "@/components/ui/button";

export function ButtonSecondary({ children }) {
  return <Button variant="secondary">{children}</Button>;
}

export default function NavLinks() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
      {links.map((link, index) => (
        <ButtonSecondary key={index}>
          <NavLink
            to={link.path}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active w-full" : ""
            }
          >
            {link.label}
          </NavLink>
        </ButtonSecondary>
      ))}
    </div>
  );
}
