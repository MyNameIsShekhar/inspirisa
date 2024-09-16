const listData = [
  {
    firstWorld: "Breaking",
    other:
      " down traditional gender roles and boosting opportunities for women.",
  },
  {
    firstWorld: "Sharing",
    other: " responsibility and taking an active role in society.",
  },
  {
    firstWorld: "Creating",
    other: " supportive environments by influencing organizational policies.",
  },
  {
    firstWorld: "Being",
    other:
      " role models for other men and boys, promoting a culture of respect and equality.",
  },
  {
    firstWorld: "Addressing",
    other:
      " power imbalances by taking action in various spheres, such as the workplace, home, and community.",
  },
];

export default function MenHelp() {
  return (
    <section className="text-center my-section py-8 space-y-8">
      <div>
        <h4 className="text-heading-4">HOW</h4>
        <h1 className="text-heading-1 text-primary underline-offset-4 underline font-playfair">
          MEN CAN HELP?
        </h1>
      </div>
      <div>
        Men play a crucial role in women empowerment by breaking down
        traditional gender roles and boosting opportunities for women. By
        sharing responsibility and influencing organizational policies, men help
        create supportive environments. Acting as role models, men promote a
        culture of respect and equality, and address power imbalances in the
        workplace, home, and community.
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left place-items-center">
        <img src="/men_help.png" alt="men help" className="" />
        <div className="space-y-4">
          <p>Here is how it can help:</p>
          <ul className="space-y-4 list-image-custom-arrow ml-8">
            {listData.map((data, index) => (
              <li key={index} className="text-heading-5">
                <b className="font-bold">{data.firstWorld}</b>
                {data.other}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
