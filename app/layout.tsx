import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "../styles/globals.css";

const space = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

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
		<html lang="en" className={space.className}>
			<body className="bg-black site-bg border-t-8 border-[#72f071]">
				{children}
			</body>
		</html>
	);
}
