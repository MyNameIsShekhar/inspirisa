import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </SheetTrigger>
      <SheetContent className="w-fit">
        <div className="mt-8">
          <NavLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
}
