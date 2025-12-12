import { LINKS } from "@/constants";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="mx-8 my-2 flex items-center justify-center p-4 md:justify-end">
      <nav className="flex gap-8 text-sm text-neutral-400">
        {LINKS.map(
          ({ title, isDisplayed, href }) =>
            isDisplayed && (
              <Link
                href={href}
                key={title}
                className="overflow-hidden text-nowrap text-ellipsis transition-colors hover:text-white"
              >
                {title}
              </Link>
            ),
        )}
      </nav>
    </header>
  );
}
