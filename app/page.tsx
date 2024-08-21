import Hero from "@/components/Hero";
import Image from "next/image";

const Home = () => {
	return (
		<main className="p-24">
			<Image
				src="/images/side-graphic.png"
				alt="Hero"
				width={96}
				height={1080}
				className="absolute bottom-0 right-24 h-full w-auto"
			/>
			<Hero />
		</main>
	);
};

export default Home;
