"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import type { z } from "zod";

import { Button } from "@/browser/reliverse/ui/Button";
import { Input } from "@/browser/reliverse/ui/Input";
import { ToastAction } from "@/browser/reliverse/ui/Toast";
import { useToast } from "@/browser/reliverse/ui/use-toast";
import { emailSchema } from "@/server/reliverse/validations/notification";
import { zodResolver } from "@hookform/resolvers/zod";
import { config } from "@reliverse/core";
import { ofetch } from "ofetch";
import superjson from "superjson";
import { randomUUID } from "uncrypto";

import { Icons } from "~/components/Common/Icons";

type Inputs = z.infer<typeof emailSchema>;

export default function JoinNewsletterForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<Inputs>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(emailSchema),
  });

  async function onSubmit(data: Inputs) {
    setLoading(true);
    try {
      const response = await ofetch("/api/mail/subscribe", {
        body: superjson.stringify({
          email: data.email,
          subject: `Nazar Kornienko: Welcome to ${config.engine.name} Weekly!`,
          token: randomUUID(),
        }),
        method: "POST",
      });

      if (!response.ok) {
        switch (response.status) {
          case 409:
            toast({
              variant: "destructive",
              title: "You are already subscribed to Reliverse Weekly 🥰",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
            break;

          case 422:
            toast({
              variant: "destructive",
              title: "Invalid input 😭",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
            break;

          case 429:
            toast({
              variant: "destructive",
              title: "The daily email limit has been reached 🥹",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
            break;

          default:
            toast({
              variant: "destructive",
              title: "Something went wrong, please try again later 🤔",
              action: <ToastAction altText="Try again">Try again</ToastAction>,
            });
        }

        return;
      }

      toast({
        title: "You have been subscribed to our newsletter! 😍",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong, please try again later 🥲",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      autoComplete="off"
      className="grid w-full"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="relative">
        <label htmlFor="email">Email</label>
        <Input
          className="pr-12"
          placeholder="Enter your email to subscribe to Reliverse Weekly..."
          {...form.register("email")}
        />
        <Button
          className="absolute right-0 top-1/2 h-8 w-14 -translate-y-1/2"
          disabled={loading}
          type="submit"
          variant="outline"
        >
          {loading ? (
            <Icons.spinner aria-hidden="true" className="animate-spin" />
          ) : (
            <Icons.send aria-hidden="true" className="size-3" />
          )}
          <span className="sr-only">Join Reliverse Weekly Newsletter</span>
        </Button>
      </div>
    </form>
  );
}
