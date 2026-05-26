const Logo = () => {
	return (
		<svg
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="w-full h-full"
		>
			<rect width="46" height="46" fill="#162438" />

			{/* C shape */}
			<path
				d="M30 13 L18 13 C13 13 10 17 10 23 C10 29 13 33 18 33 L30 33"
				stroke="#6abf1e"
				strokeWidth="3.5"
				strokeLinecap="round"
				fill="none"
			/>

			{/* E bars */}
			<line
				x1="30"
				y1="13"
				x2="38"
				y2="13"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			<line
				x1="30"
				y1="23"
				x2="36"
				y2="23"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			<line
				x1="30"
				y1="33"
				x2="38"
				y2="33"
				stroke="white"
				strokeWidth="3"
				strokeLinecap="round"
			/>

			{/* Green slash accent */}
			<line
				x1="26"
				y1="40"
				x2="36"
				y2="6"
				stroke="#6abf1e"
				strokeWidth="2"
				opacity="0.5"
			/>
		</svg>
	);
};

export default Logo;