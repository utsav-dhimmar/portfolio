import { LINKS, SKILLS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 relative font-sans">
			{/* Navigation */}
			<nav className="absolute top-8 right-12 flex gap-8 text-neutral-400 text-sm ">
				{LINKS.map(
					({ title, isDisplayed, href }) =>
						isDisplayed && (
							<Link
								href={href}
								key={title}
								className="hover:text-white transition-colors"
							>
								{title}
							</Link>
						),
				)}
			</nav>

			<div className="max-w-2xl w-full flex flex-col gap-8">
				{/* Profile Info */}
				<div className="space-y-4">
					<div className="w-16 h-16 rounded-full overflow-hidden border border-neutral-800 mb-6">
						<Image
							src="https://avatars.githubusercontent.com/u/136555325?v=4"
							alt="Utsav Dhimmar"
							width={64}
							height={64}
							className="w-full h-full object-cover"
							title="Image from GitHub"
						/>
					</div>

					<h1 className="text-2xl font-normal tracking-wide">
						Hi, I'm Utsav Dhimmar.
					</h1>

					<p className="text-neutral-400 leading-relaxed max-w-lg">
						Full Stack Developer ⚡.
					</p>
				</div>

				{/* Skills Section */}
				<div className="space-y-3">
					<h2 className="text-md text-white font-medium">
						Top Skills
					</h2>
					<div className="flex flex-wrap items-center gap-x-2 text-neutral-500 text-sm">
						{SKILLS.map((skill, index) => (
							<span key={skill} className="flex items-center">
								{skill}
								{index !== SKILLS.length - 1 && (
									<span className="ml-2 text-neutral-700 mx-1">
										•
									</span>
								)}
							</span>
						))}
					</div>
				</div>

				{/* CTA Button */}
				<div className="pt-4">
					<button className="bg-white text-black px-8 py-2.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-colors cursor-pointer">
						<Link
							href="https://twitter.com/intent/tweet?text=Hello%20@utsav_dhimmar"
							target="_blank"
						>
							Say Hello
						</Link>
					</button>
				</div>
			</div>
		</main>
	);
}
