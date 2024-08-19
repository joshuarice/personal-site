import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
	return (
		<header className="bg-secondary text-foreground p-4">
			<nav className="container mx-auto flex justify-between items-center">
				<h1 className="text-2xl font-bold matrix-text">Personal Site</h1>
				<ul className="flex space-x-4">
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
				<ThemeToggle />
			</nav>
		</header>
	);
};

export default Header;
