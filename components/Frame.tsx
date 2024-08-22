const Frame = () => {
	return (
		<>
			<div className="fixed top-0 left-0 w-0 h-0 border-t-[2.25rem] border-t-black border-r-[2.25rem] border-r-transparent z-20"></div>
			<div className="fixed top-0 left-0 w-0 h-0 border-t-[3rem] border-t-[#72f071] border-r-[3rem] border-r-transparent z-10"></div>
			<div className="h-2 w-screen fixed top-0 bg-[#72f071] z-20"></div>
			<div className="w-2 h-screen fixed top-0 left-0 bg-gradient-to-b from-[#72f071] via-[#72f071] to-transparent z-20"></div>
			<div className="w-2 h-screen fixed top-0 right-0 bg-gradient-to-b from-[#72f071] via-[#72f071] to-transparent z-20"></div>
		</>
	);
};

export default Frame;
