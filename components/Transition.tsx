"use client";

import { motion } from "framer-motion";

export default function Transition({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<motion.div
				className="bg-black border-r-[200px] border-[#72f071] h-screen w-screen absolute top-0 left-0 z-100 pointer-events-none"
				initial={{ x: "0" }}
				animate={{ x: "-100%" }}
				transition={{ ease: "easeInOut", duration: 0.5 }}></motion.div>
			{children}
		</>
	);
}
