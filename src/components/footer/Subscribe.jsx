import SubscribeForm from "../forms/SubscribeForm";

export default function Subscribe() {
  return (
    <div className="flex-1 flex flex-col justify-between">
      <div className="space-y-8">
        <h4 className="text-heading-4 font-playfair">
          Get the Inspirisa Daily
        </h4>
        <p>
          Sign up to receive tips on work, life, and how to chase (and reach!)
          your dreams.
        </p>
      </div>
      <SubscribeForm />
    </div>
  );
}
