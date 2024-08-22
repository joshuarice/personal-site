import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import Frame from "@/components/Frame";
import Social from "@/components/Social";

const font = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Joshua Rice - Next.js UI/UX Designer & Developer",
	description: "",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={font.className}>
			<body className="site-bg min-h-[533px]">
				<Frame />
				{children}
				<Social />
			</body>
		</html>
	);
}
