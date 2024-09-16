import { Link } from "react-router-dom";
import { links } from "../navbar/NavLinks";
import { Button } from "../ui/button";

export default function QuickLinks() {
  return (
    <div className="flex-1">
      <h4 className="text-heading-4">Quick Links</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Button
              size="small"
              variant="link"
              className="text-button text-background font-light"
            >
              <Link to={link.path}>{link.label}</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
