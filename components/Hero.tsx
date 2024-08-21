"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<>
			<div className="flex justify-between mb-4">
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}>
					<h1 className="text-4xl font-bold text-white uppercase">
						Joshua Rice
					</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}>
					<p className="text-white">
						<MapPinIcon className="text-[#72f071] h-4 w-4 inline-block mr-1 relative -top-0.5" />
						Colorado, USA
					</p>
				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 0.5 }}>
				<div className="border-b-4 border-[#72f071] w-48 mb-16"></div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}>
				<p className="text-[10rem] leading-none font-bold text-white uppercase mb-64">
					Designer+
					<br />
					Developer
				</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 1 }}>
				<Link
					href="/work"
					className="text-[#72f071] uppercase text-4xl inline-block">
					View My Work
				</Link>
			</motion.div>
		</>
	);
};

export default Hero;
