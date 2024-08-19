import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "My Portfolio",
	description: "Welcome to my portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="min-h-screen flex flex-col">
						<Header />
						<div className="flex-grow">
							<div className="container mx-auto p-4">{children}</div>
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
