import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const projectsData = [
	{ id: 1, title: "Project 1", description: "Description for Project 1" },
	{ id: 2, title: "Project 2", description: "Description for Project 2" },
	{ id: 3, title: "Project 3", description: "Description for Project 3" },
	{ id: 4, title: "Project 4", description: "Description for Project 4" },
	{ id: 5, title: "Project 5", description: "Description for Project 5" },
	{ id: 6, title: "Project 6", description: "Description for Project 6" },
	{ id: 7, title: "Project 7", description: "Description for Project 7" },
	{ id: 8, title: "Project 8", description: "Description for Project 8" },
	{ id: 9, title: "Project 9", description: "Description for Project 9" },
];

export default function Projects() {
	return (
		<main className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">My Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{projectsData.map((project) => (
					<Card key={project.id}>
						<CardHeader>
							<CardTitle>
								<Link href={`/projects/${project.id}`} className="hover:underline">
									{project.title}
								</Link>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">{project.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</main>
	);
}
