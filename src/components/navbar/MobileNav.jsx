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
      <SheetContent className="w-1/2 md:w-1/3 lg:w-1/4">
        <div className="mt-8">
          <NavLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
}
