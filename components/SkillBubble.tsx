const SkillBubble = ({ name }: { name: string }) => {
	return (
		<div className="border-2 border-gray-600 text-gray-400 rounded-full px-4 py-2 inline-block">
			{name}
		</div>
	);
};

export default SkillBubble;
