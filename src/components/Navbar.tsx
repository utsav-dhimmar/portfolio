import Link from "next/link";

export default function Navbar() {
	const LINKS = [
		{
			title: "Linkdin",
			href: "https://www.linkedin.com/in/utsav-dhimmar/",
			isDisplayed: true,
		},
		{
			title: "Github",
			href: "https://github.com/utsav-dhimmar/",
			isDisplayed: true,
		},
	];
	return (
		<header className="my-2 mx-8 ">
			<nav className="flex items-center justify-end h-10 w-full">
				<ul className="flex items-center justify-center gap-4">
					{LINKS.map(
						({ title, isDisplayed, href }) =>
							isDisplayed && (
								<li key={title} className="">
									<Link href={href} target="_blank">
										<span className="text-neutral-200 font-medium text-md">
											{title}
										</span>
									</Link>
								</li>
							),
					)}
				</ul>
			</nav>
		</header>
	);
}
