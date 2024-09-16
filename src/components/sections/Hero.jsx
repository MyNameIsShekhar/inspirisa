import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="space-y-8">
      <MainHero />
      <section className="my-section space-y-8">
        <div className="flex flex-col items-center border border-muted space-y-4 py-2">
          <h3 className="text-heading-3 font-playfair">
            OUR BUSINESS PARTNERS
          </h3>
          <div className="flex">
            <img src="/hero/partner.png" alt="partner" />
            <img src="/hero/partner.png" alt="partner" />
            <img src="/hero/partner.png" alt="partner" />
          </div>
        </div>
        <h1 className="text-center text-display-5 font-playfair text-primary">
          FEMININE INCLUSIVE LEADERSHIP PROGRAMS
        </h1>
      </section>
    </section>
  );
}

function MainHero() {
  return (
    <div className="my-section flex bg-[url('/hero/line.svg')] bg-no-repeat bg-center bg-cover">
      <section className="grid grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 items-center w-fit">
            <img src="name_logo.svg" alt="" className="h-11 w-fit" />
            <span className="text-heading-5 font-medium">Global Community</span>
            <i className="font-playfair">Since 2017</i>
          </div>
          <h1 className="text-display-3 font-playfair">
            EMPOWERING{" "}
            <span>
              <span className="text-primary">
                {" "}
                <span className="font-pinyon  text-[92px] mr-4">W</span>
                <span>OMEN</span>{" "}
              </span>{" "}
              <i>through</i>
            </span>{" "}
            INSPIRATIONAL EDUCATION
          </h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary-foreground rounded-full py-6 hover:text-primary"
            >
              EXPLORE MORE
              <div className="rounded-full bg-primary h-8 w-8 flex items-center justify-center ml-4">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-primary-foreground text-heading-4"
                />
              </div>
            </Button>
            <Button size="icon" className="rounded-full min-h-12 min-w-12">
              <FontAwesomeIcon
                icon={faPlay}
                className="text-heading-4 text-primary-foreground ml-1"
              />
            </Button>
          </div>
        </div>
        <div className="hidden lg:block bg-[url('/white_logo.svg')] bg-no-repeat bg-center bg-cover">
          <img src="/hero/frame.png" alt="" />
        </div>
      </section>
    </div>
  );
}
