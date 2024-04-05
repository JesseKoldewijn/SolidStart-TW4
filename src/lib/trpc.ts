import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { createResource } from "solid-js";

import type { AppRouter } from "~/server/trpc/root";

const hostUrl =
  process.env.NODE_ENV == "production"
    ? "https://tw4-solid-start.vercel.app"
    : "http://localhost:3000";

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${hostUrl}/api/trpc`,
    }),
  ],
});

type TrpcRouters = Omit<AppRouter, "createCaller" | "_def">;
type TrpcRouterScope = keyof TrpcRouters;

export const useTrpc = ({
  router,
  procedure,
  input,
}: {
  router: TrpcRouterScope;
  procedure: keyof TrpcRouters[typeof router];
  input: TrpcRouters[typeof router][typeof procedure]["_def"]["$types"]["input"];
}) => {
  try {
    return createResource(async () => {
      return await trpc[router][procedure].query({
        ...input,
      });
    });
  } catch (error) {
    console.error(error);
    return createResource(() => undefined);
  }
};
