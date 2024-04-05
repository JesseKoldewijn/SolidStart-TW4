import { Show } from "solid-js";

import { useTrpc } from "~/lib/trpc";
import { PageTitle } from "~/server/meta/PageTitle.jsx";

const HomePage = () => {
  const [data, { refetch, mutate }] = useTrpc({
    router: "example",
    procedure: "hello",
    input: { name: "world" },
  });

  return (
    <>
      <PageTitle />
      <div>
        <h2>HomePage</h2>
        <Show when={data()?.greeting}>
          <div>{data()?.greeting}</div>
        </Show>
      </div>
    </>
  );
};

export default HomePage;
