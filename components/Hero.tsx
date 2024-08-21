"use client";

import { ArrowRightCircleIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft } from "@/utils/motion";
import SkillBubble from "./SkillBubble";

const Hero = () => {
	const multiplier = 0.3;
	return (
		<>
			<div className="flex justify-between mb-4 pr-36 z-10">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={slideInFromLeft(multiplier)}>
					<h1 className="text-4xl font-bold text-white">
						Joshua Rice
					</h1>
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={fadeIn(multiplier * 2)}>
					<p className="text-white text-4xl font-bold ">
						<MapPinIcon className="text-[#72f071] h-9 w-9 inline-block mr-2 relative -top-0.5" />
						Colorado, USA
					</p>
				</motion.div>
			</div>
			<motion.div initial="hidden" animate="visible" variants={fadeIn(1)}>
				<div className="border-b-4 border-[#72f071] w-48 mb-16"></div>
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={slideInFromLeft(multiplier * 2)}>
				<p className="inline-block text-[10rem] leading-none font-bold  uppercase bg-gradient-to-r from-white to-[#72f071] text-transparent bg-clip-text -ml-2">
					Designer+
					<br />
					Developer
				</p>
			</motion.div>
			<div className="flex gap-4 mt-5">
				<motion.div
					initial="hidden"
					animate="visible"
					variants={slideInFromLeft(multiplier * 3)}>
					<SkillBubble name="Next.js" />
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={slideInFromLeft(multiplier * 3.75)}>
					<SkillBubble name="Web Development" />
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={slideInFromLeft(multiplier * 4.5)}>
					<SkillBubble name="Web Applications" />
				</motion.div>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={slideInFromLeft(multiplier * 5.25)}>
					<SkillBubble name="UI/UX Design" />
				</motion.div>
			</div>
			<div className="mb-48"></div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={slideInFromLeft(multiplier * 3)}>
				<Link
					href="/work"
					className="text-[#72f071] font-bold uppercase text-4xl inline-block">
					View My Work{" "}
					<ArrowRightCircleIcon className="h-10 w-10 inline-block ml-1 -mt-1" />
				</Link>
			</motion.div>
		</>
	);
};

export default Hero;
