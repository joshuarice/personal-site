import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

const Header = () => {
	return (
		<header className="fixed top-0 w-full dark:bg-green-950 text-foreground py-3 border-b border-green-400">
			<nav className="container mx-auto flex justify-between items-center">
				<Link href="/" className="matrix-text text-lg text-green-400 flex-auto">
					Joshua Rice
				</Link>
				<ul className="flex space-x-4">
					<li>
						<Link href="/about">About</Link>
					</li>
				</ul>
				<ThemeToggle />
			</nav>
		</header>
	);
};

export default Header;
