import { exampleRouter } from "./routers/example";
import { router } from "./trpc";

export const appRouter = router({
  example: exampleRouter,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
