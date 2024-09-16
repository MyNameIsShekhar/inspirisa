import { Separator } from "../ui/separator";
import Connect from "./Connect";
import QuickLinks from "./QuickLinks";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className="my-section space-y-8 py-8 md:py-16 bg-primary-dark text-background">
      <section className="grid grid-cols-2  md:grid-cols-4 gap-8 ">
        <Connect />
        <QuickLinks />
        <QuickLinks />
        <Subscribe />
      </section>
      <Separator className="bg-muted-foreground" />
      <section className="text-center">
        <p>Copyright © 2024 Inspirisa by Guapalita</p>
      </section>
    </footer>
  );
}
