import { Meta, Title } from "@solidjs/meta";

import { appConfig } from "~/config/app.js";

export const PageTitle = ({
  title,
  isAbsolute = false,
}: {
  title?: string;
  isAbsolute?: boolean;
}) => {
  switch (isAbsolute) {
    case true:
      return (
        <>
          <Title>{title}</Title>
          <Meta
            name="desc"
            content={`${title} | ${appConfig.branding.meta.description}`}
          />
        </>
      );
    case false:
      return (
        <>
          <Title>{appConfig.branding.meta.title}</Title>
          <Meta name="desc" content={appConfig.branding.meta.description} />
        </>
      );
  }
};
