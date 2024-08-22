const SkillBubble = ({ name }: { name: string }) => {
	return (
		<div className="border-2 border-gray-600 text-gray-400 rounded-full px-3 py-1 inline-block select-none">
			{name}
		</div>
	);
};

export default SkillBubble;
