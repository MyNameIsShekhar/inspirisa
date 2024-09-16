import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: faFacebook, href: "https://facebook.com", areaLabel: "Facebook" },
  { icon: faXTwitter, href: "https://twitter.com", areaLabel: "X" },
  {
    icon: faInstagram,
    href: "https://instagram.com",
    areaLabel: "Instagram",
  },
  { icon: faLinkedin, href: "https://linkedin.com", areaLabel: "Linkedin" },
];

export default function Connect() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <img src="/footer_logo.svg" alt="footer logo" className="h-12" />
      </div>
      <div className="space-y-8">
        <h4 className="text-heading-4 mt-2">
          We're here to spark the thrill of possibility
        </h4>
        <div className="flex gap-2 sm:gap- 4 md:gap-8">
          {socialLinks.map((link, index) => (
            <a
              href={link.href}
              aria-label={link.areaLabel}
              key={index}
              target="blank"
            >
              <FontAwesomeIcon icon={link.icon} className="text-heading-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
