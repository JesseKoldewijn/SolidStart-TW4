import { Button } from "@kobalte/core";
import { Show, createSignal } from "solid-js";

import { useTrpc } from "~/lib/trpc";
import { PageTitle } from "~/server/meta/PageTitle.jsx";

const HomePage = () => {
  const [data, { refetch }] = useTrpc({
    router: "example",
    procedure: "hello",
    input: {
      name: "world",
      timeStamp: new Date().toUTCString(),
    },
  });

  const [isRefetching, setIsRefetching] = createSignal(false);

  const handleClick = (
    e: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: Element;
    },
  ) => {
    e.preventDefault();
    setIsRefetching(true);
    refetch();
    setTimeout(() => setIsRefetching(false), 1000);
  };

  return (
    <>
      <PageTitle />
      <div class="my-auto flex min-h-screen w-full flex-col items-center justify-center gap-4 text-center">
        <div class="flex flex-col gap-2 text-balance">
          <h2>HomePage</h2>
          <Show when={data()?.greeting}>
            <div class="max-w-sm text-balance">{data()?.greeting}</div>
          </Show>
        </div>
        <Button.Root
          onClick={handleClick}
          class="hover:bg-foreground hover:text-background cursor-pointer rounded-md border-2 py-1 px-2 hover:border-transparent"
          disabled={isRefetching()}
        >
          Refetch
        </Button.Root>
      </div>
    </>
  );
};

export default HomePage;
