import Button from "~/components/ui/Button";
import { PageTitle } from "~/server/meta/PageTitle.jsx";

const AboutPage = () => {
  const handleClick = () => {
    window.location.href = "/";
  };
  return (
    <>
      <PageTitle title="About" />
      <div class="my-auto flex min-h-screen w-full flex-col items-center justify-center gap-4 text-center">
        <div class="flex flex-col gap-2 text-balance">
          <h2>About</h2>
        </div>
        <Button
          onClick={handleClick}
          class="hover:bg-foreground hover:text-background cursor-pointer rounded-md border-2 py-1 px-2 hover:border-transparent"
        >
          Go back to home page
        </Button>
      </div>
    </>
  );
};

export default AboutPage;
