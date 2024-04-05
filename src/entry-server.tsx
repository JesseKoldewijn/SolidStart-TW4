// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server";

import { cookieNames } from "./config/cookies.js";
import { cn } from "./utils/cn.js";
import { cookieMapper } from "./utils/cookies.js";

export default createHandler((props) => {
  const { request } = props;

  const reqCookies = request.headers.get("cookie");
  const cookies = cookieMapper(reqCookies ?? "");

  const themeCookie = cookies.get(cookieNames.theme);
  const theme = themeCookie == "light" ? "light" : "dark";

  return (
    <StartServer
      document={({ assets, children, scripts }) => {
        return (
          <html
            lang="en"
            class={cn(
              "bg-background text-foreground",
              "transition-colors duration-500 ease-in-out",
              theme,
            )}
          >
            <head>
              <meta charset="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <link rel="icon" href="/favicon.ico" />
              {assets}
            </head>
            <body>
              <div id="app">{children}</div>
              {scripts}
            </body>
          </html>
        );
      }}
    />
  );
});
