import { SocialIcon } from "react-social-icons";

const Social = () => {
	return (
		<div className="fixed bottom-6 w-full text-center">
			<SocialIcon
				bgColor="transparent"
				fgColor="gray"
				network="github"
				url="www.vimeo.com"
			/>
			<SocialIcon
				bgColor="transparent"
				fgColor="gray"
				network="linkedin"
				url="www.vimeo.com"
			/>
			<SocialIcon
				bgColor="transparent"
				fgColor="gray"
				network="discord"
				url="www.vimeo.com"
			/>
		</div>
	);
};

export default Social;
