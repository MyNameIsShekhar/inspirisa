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
        <NavLink
          to={link.path}
          key={index}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active w-full" : ""
          }
        >
          {({ isActive }) => (
            isActive ? (
              <ButtonSecondary>{link.label}</ButtonSecondary>
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
