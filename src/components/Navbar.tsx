import { LINKS } from "@/constants";

export default function Navbar() {
  return (
    <header className="mx-8 my-2 flex items-center justify-center p-4 md:justify-end">
      <nav className="flex gap-8 text-sm text-neutral-400">
        {LINKS.map(
          ({ title, isDisplayed, href }) =>
            isDisplayed && (
              <a
                href={href}
                key={title}
                className="overflow-hidden text-nowrap text-ellipsis transition-colors hover:text-white"
              >
                {title}
              </a>
            ),
        )}
      </nav>
    </header>
  );
}
