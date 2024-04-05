import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "~/server/trpc/root";

const handler = (event: { request: Request }) =>
  // adapts tRPC to fetch API style requests
  fetchRequestHandler({
    // the endpoint handling the requests
    endpoint: "/api/trpc",
    // the request object
    req: event.request,
    // the router for handling the requests
    router: appRouter,
    // any arbitary data that should be available to all actions
    createContext: () => ({ something: "random" }),
  });

export const GET = handler;
export const POST = handler;
