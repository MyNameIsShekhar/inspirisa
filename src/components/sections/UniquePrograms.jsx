import ProgramsCard from "../card/ProgramsCard";

const cardData = [
  {
    iconRef: "/card_icons/emotion.svg",
    heading: "EMOTIONS",
    description:
      "We strongly believe feelings of excitement and enthusiasm can inspire action and creativity.",
  },
  {
    iconRef: "/card_icons/competence.svg",
    heading: "COMPETENCIES",
    description:
      "We know developing competencies is essential for effectively performing a specific job or task.",
  },
  {
    iconRef: "/card_icons/action.svg",
    heading: "ACTIONS",
    description:
      "Implementing strategic initiatives to achieve the SDG 2030 goals.",
  },
];

export default function UniquePrograms() {
  return (
    <div className="text-center my-section py-8 space-y-8 bg-custom-pattern bg-primary-foreground">
      <div className="space-y-2">
        <h4 className="text-heading-4 text-primary">Our unique programs are</h4>
        <h1 className="text-heading-1 text-primary underline underline-offset-4 font-playfair">
          FOCUSED ON THREE KEY PILLARS
        </h1>
      </div>
      <h4 className="text-heading-4">EMOTIONS + COMPETENCIES + ACTIONS</h4>
      <div className="space-y-4">
        <p>Our unique programs are focused on three key pillars:</p>
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((data, index) => (
            <ProgramsCard key={index} data={data} />
          ))}
        </div>
        <p>
          This framework builds momentum and confidence to enable learning and
          growth.
        </p>
      </div>
    </div>
  );
}
