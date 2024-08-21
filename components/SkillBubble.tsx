const SkillBubble = ({ name }: { name: string }) => {
	return (
		<div className="border border-gray-300 text-gray-300 rounded-full px-4 py-2 inline-block">
			{name}
		</div>
	);
};

export default SkillBubble;
