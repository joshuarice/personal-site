import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Transition from "../components/Transition";

const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Portfolio",
	description: "Welcome to my portfolio website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={font.className}>
			<body className="bg-black site-bg border-t-8 border-[#72f071]">
				<Transition>{children}</Transition>
			</body>
		</html>
	);
}
