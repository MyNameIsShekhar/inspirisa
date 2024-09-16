import React from "react";

export default function ProgramsCard({ data }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-background border border-primary p-8">
      <img src={data.iconRef} alt="icon" />
      <h4 className="text-heading-3 font-playfair text-primary">
        {data.heading}
      </h4>
      <p className="text-heading-5">{data.description}</p>
    </div>
  );
}
