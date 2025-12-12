import { INFO, SKILLS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-8 font-mono text-white">
      {/* Navigation */}

      <div className="flex w-full max-w-2xl flex-col gap-8">
        {/* Profile Info */}
        <div className="space-y-4">
          <div className="mb-6 h-16 w-16 overflow-hidden rounded-full border border-neutral-800">
            <Image
              src={INFO.GITHUB_PROFILE_URL}
              alt={INFO.name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
              title="Image from GitHub"
            />
          </div>

          <h1 className="text-2xl font-normal tracking-wide">
            Hi, I&#39;m {INFO.name}.
          </h1>

          <p className="max-w-lg leading-relaxed text-neutral-400">
            Full Stack Developer ⚡.
          </p>
        </div>

        {/* Skills Section */}
        <div className="space-y-3">
          <h2 className="text-md font-medium text-white">Top Skills</h2>
          <div className="flex flex-wrap items-center gap-x-2 text-sm text-neutral-500">
            {SKILLS.map((skill, index) => (
              <span key={skill} className="flex items-center">
                {skill}
                {index !== SKILLS.length - 1 && (
                  <span className="mx-1 ml-2 text-neutral-700">
                    •{/*<Dot />*/}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button className="mr-4 cursor-pointer rounded-full bg-white px-8 py-2.5 text-sm font-medium text-black transition-colors hover:bg-neutral-200">
            <Link
              href="https://twitter.com/intent/tweet?text=Hello%20@utsav_dhimmar"
              target="_blank"
            >
              Say Hello
            </Link>
          </button>
          <button className="mr-4 cursor-pointer rounded-full border border-white px-8 py-2.5 text-sm font-medium text-white transition-all hover:border-none hover:bg-white hover:text-black">
            <Link href={INFO.RESUME_LINK} target="_blank">
              Resume
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
