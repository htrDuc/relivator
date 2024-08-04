"use client";

import { useTransition } from "react";

import { Button } from "@/browser/reliverse/ui/Button";
import { generateProducts } from "@/server/reliverse/actions/generate";
import { catchError } from "@/server/reliverse/errors/helpers/auth";
import consola from "consola";
import tryToCatch from "try-to-catch";

import { Icons } from "~/components/Common/Icons";

type GenerateButtonProps = {
  storeId: string;
};

export function GenerateButton({ storeId }: GenerateButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      className={`
        h-8 px-2

        lg:px-3
      `}
      onClick={() => {
        startTransition(async () => {
          const [error] = await tryToCatch(generateProducts, {
            count: 5,
            storeId,
          });

          if (error) {
            consola.error(
              "Something wrong. If you're developer, check console if there is an error.",
            );

            // toast({
            //   description:
            //     "Something wrong. If you're developer, check console if there is an error.",
            //   title: "Products Generation",
            //   variant: "destructive",
            // });
            catchError(error);
          }
        });
      }}
      variant="secondary"
    >
      {isPending && (
        <Icons.spinner
          aria-hidden="true"
          className="mr-2 size-4 animate-spin"
        />
      )}
      Generate products
    </Button>
  );
}
