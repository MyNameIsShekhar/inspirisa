import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { subscribeSchema } from "@/lib/zod/subscribe";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function SubscribeForm() {
  const form = useForm({
    resolver: zodResolver(subscribeSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-end">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormMessage />
              <FormControl>
                <Input
                  placeholder="your-email@email.com"
                  {...field}
                  className="rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-button rounded-none bg-[#FFD54F] text-foreground hover:bg-[#FFD54F]/90"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
