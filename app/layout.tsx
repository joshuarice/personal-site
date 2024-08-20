import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

const space = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Portfolio",
	description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={space.className}>
			<body className="bg-black">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					<div className="min-h-screen py-20 px-8">{children}</div>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
