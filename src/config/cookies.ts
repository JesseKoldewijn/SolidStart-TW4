import { appConfig } from "./app.js";

export const cookieNames = {
  theme: `${appConfig.branding.appName}-theme`,
} as const;
