'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Copy, Github } from "lucide-react"; // Added Github icon
import { ThemeToggle } from "@/components/theme-toggle"; // Added import
// import { api } from "@/lib/api"; // api import no longer needed if no API calls from this page

export default function Home() {
  const cloneCommand = "git clone https://github.com/inagib21/nextjs-fiber-template.git";
  const repoUrl = "https://github.com/inagib21/nextjs-fiber-template";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cloneCommand)
      .then(() => {
        alert("Clone command copied to clipboard!");
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert("Failed to copy command. See console for details.");
      });
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Header/Toggle section - Adjust layout as needed */}
      <header className="w-full max-w-4xl flex justify-end py-4">
        <ThemeToggle />
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center max-w-4xl w-full">
        <div className="flex flex-col items-center gap-6 w-full mb-4">
          <div className="flex items-center gap-8 justify-center">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <span className="text-2xl font-bold">+</span>
            <Image
              src="/fiber.svg"
              alt="Fiber logo"
              width={180}
              height={38}
              className="dark:invert"
              priority
            />
          </div>
        </div>

        {/* Git Clone Command Section */}
        <div className="w-full max-w-2xl p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 shadow-md">
          <h2 className="text-lg font-semibold text-center mb-3 text-gray-800 dark:text-gray-200">Get Started Quickly</h2>
          <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-700 rounded-md">
            <code className="text-sm text-gray-700 dark:text-gray-300 overflow-x-auto">
              {cloneCommand}
            </code>
            <Button variant="ghost" size="icon" onClick={copyToClipboard} aria-label="Copy clone command">
              <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>
        </div>

        {/* View Source Code Button */}
        <div className="mt-6 w-full max-w-xs">
          <Button asChild className="w-full sm:h-12">
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Source Code
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mt-8">
          {/* Frontend Section */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold">Frontend (Next.js)</h2>
            <ol className="list-inside list-decimal text-sm space-y-4">
              <li>
                Edit{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  app/page.tsx
                </code>
                {" "}to start development
              </li>
              <li>Built with Next.js App Router & React Server Components</li>
              <li>Styled with Tailwind CSS & shadcn/ui</li>
            </ol>
            <div className="flex flex-col gap-4 w-full">
              <Button
                variant="outline"
                asChild
                className="sm:h-12 justify-center"
              >
                <a
                  href="https://nextjs.org/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/file.svg"
                    alt="Docs icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Next.js Documentation
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="sm:h-12 justify-center"
              >
                <a
                  href="https://nextjs.org/learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/window.svg"
                    alt="Learn icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Learn Next.js
                </a>
              </Button>
            </div>
          </div>

          {/* Backend Section */}
          <div className="space-y-6 flex flex-col items-center text-center">
            <h2 className="text-xl font-bold">Backend (Go Fiber)</h2>
            <ol className="list-inside list-decimal text-sm space-y-4">
              <li>High-performance Go web framework</li>
              <li>Built on top of Fasthttp</li>
              <li>Express-style routing and middleware</li>
            </ol>
            <div className="flex flex-col gap-4 w-full">
              <Button
                variant="outline"
                asChild
                className="sm:h-12 justify-center"
              >
                <a
                  href="https://docs.gofiber.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/file.svg"
                    alt="Docs icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Fiber Documentation
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="sm:h-12 justify-center"
              >
                <a
                  href="https://docs.gofiber.io/guide/routing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/window.svg"
                    alt="Examples icon"
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                  Fiber API Guide
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/gofiber/fiber"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go Fiber GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Next.js Website
        </a>
      </footer>
    </div>
  );
}
