import { projectsData } from "@/app/projects/page";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	return projectsData.map((project) => ({
		id: project.id.toString(),
	}));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
	const project = projectsData.find((p) => p.id.toString() === params.id);

	if (!project) {
		notFound();
	}

	return (
		<div>
			<h1>{project.title}</h1>
			{/* Add more project details here */}
		</div>
	);
}
