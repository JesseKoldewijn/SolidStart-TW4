export const hostname =
  process.env.NODE_ENV === "production"
    ? "https://tw4-solid-start.vercel.app"
    : "http://localhost:3000";
