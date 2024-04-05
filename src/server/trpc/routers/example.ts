import { z } from "zod";

import { publicProcedure, router } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query(async (opts) => {
      const { name } = opts.input;

      return {
        greeting: `Hello, ${name}!`,
      };
    }),
});
