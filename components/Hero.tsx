"use client";

import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<>
			<div className="flex overflow-hidden">
				<motion.div className="flex-auto" initial="hidden" animate={{ x: 100 }}>
					Slide In From Left
				</motion.div>
				<motion.div className="flex-auto text-right" initial="hidden" animate="visible" variants={slideInFromRight(0.5)}>
					Slide In From Right
				</motion.div>
			</div>
		</>
	);
};

export default Hero;
