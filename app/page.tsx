import Hero from "@/components/Hero";
import type { Project } from "@/types/app";
import Link from "next/link";

const featured: Project[] = [
	{
		url: "/work/1",
		background: "/work/1.png",
		title: "Street League Spec Platform",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		skills: ["Next.js", "Tailwind", "Mantine UI", "Supabase"],
	},
	{
		url: "/work/2",
		background: "/work/2.png",
		title: "Rocket Drones Platform",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		skills: ["Next.js", "Tailwind", "Mantine UI", "Supabase"],
	},
	{
		url: "/work/3",
		background: "/work/3.png",
		title: "Rocket Drones Race Manager",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		skills: ["React", "Electron", "Tailwind", "Supabase", "Recoil"],
	},
];

const Home = () => {
	return (
		<main>
			<Hero />
			<div className="grid grid-cols-1 md:grid-cols-2">
				{featured.map((project) => (
					<Link
						href={project.url}
						key={project.title}
						className="bg-gradient-to-br from-gray-900 via-gray-900 to-[#72f071] first-letter:first-line: text-white h-[500px] flex items-end p-12"
					>
						<div className="max-w-2xl">
							<h2 className="text-4xl mb-2 font-bold">{project.title}</h2>
							<p className="mb-8">{project.desc}</p>
							<ul className="flex gap-2">
								{project.skills.map((skill) => (
									<li className="border border-gray-400 rounded-md px-2 py-1" key={skill}>
										{skill}
									</li>
								))}
							</ul>
						</div>
					</Link>
				))}
			</div>
		</main>
	);
};

export default Home;
