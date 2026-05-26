const Skyline = () => {
	return (
		<svg
			className="absolute bottom-0 right-0 w-[50%] z-2 opacity-10"
			viewBox="0 0 900 300"
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="20" y="200" width="30" height="100" />
			<rect x="60" y="170" width="40" height="130" />
			<rect x="110" y="140" width="50" height="160" />
			<rect x="170" y="110" width="35" height="190" />
			<rect x="215" y="130" width="60" height="170" />
			<rect x="285" y="80" width="45" height="220" />
			<rect x="340" y="100" width="30" height="200" />
			<rect x="380" y="60" width="55" height="240" />
			<rect x="445" y="90" width="40" height="210" />
			<rect x="495" y="120" width="35" height="180" />
			<rect x="540" y="150" width="50" height="150" />
			<rect x="600" y="130" width="40" height="170" />
			<rect x="650" y="160" width="30" height="140" />
			<rect x="690" y="180" width="45" height="120" />
			<rect x="745" y="140" width="35" height="160" />
			<rect x="790" y="110" width="50" height="190" />
			<rect x="850" y="170" width="40" height="130" />

			{/* Steeple */}
			<polygon points="330,80 345,40 360,80" />

			{/* Antenna */}
			<line
				x1="407"
				y1="60"
				x2="407"
				y2="20"
				stroke="white"
				strokeWidth="3"
			/>

			<circle cx="407" cy="18" r="4" fill="white" />
		</svg>
	);
};

export default Skyline;