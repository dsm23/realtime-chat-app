import { Metadata } from "next";
import { LP_GRID_ITEMS } from "lp-items";
import { Button } from "~/components/button";

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
};

export default function Web() {
  return (
    <main>
      <h1 className="sr-only">Delete this</h1>

      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Next.js Enterprise Boilerplate
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Jumpstart your enterprise project with our feature-packed,
              high-performance Next.js boilerplate! Experience rapid UI
              development, AI-powered code reviews, and an extensive suite of
              tools for a smooth and enjoyable development process.
            </p>
            <Button asChild>
              <a
                href="https://github.com/dsm23/dsm23-next-template"
                className="mr-3"
              >
                Get started
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://vercel.com/new/git/external?repository-url=https://github.com/dsm23/dsm23-next-template/">
                Deploy Now
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
          <div className="justify-center space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3">
            {LP_GRID_ITEMS.map((singleItem) => (
              <div
                key={singleItem.title}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-full p-1.5 text-blue-700 lg:size-12">
                  {singleItem.icon}
                </div>
                <h2 className="mb-2 text-xl font-bold dark:text-white">
                  {singleItem.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {singleItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
