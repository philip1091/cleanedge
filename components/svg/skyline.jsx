const Skyline = () => {
	const S = 28
	const DX = 84
	const DY = 48
	const COLS = 12
	const ROWS = 22
	const OX = 520
	const OY = 420

	const hexPoints = (cx, cy) => {
		const pts = [
			[cx + S,    cy],
			[cx + S/2,  cy + S*0.866],
			[cx - S/2,  cy + S*0.866],
			[cx - S,    cy],
			[cx - S/2,  cy - S*0.866],
			[cx + S/2,  cy - S*0.866],
		]
		return pts.map(p => p.join(',')).join(' ')
	}

	const hexes = []
	for (let r = -2; r < ROWS; r++) {
		for (let c = 0; c < COLS; c++) {
			const cx = c * DX + (r % 2 === 0 ? 0 : 42) - 40
			const cy = r * DY - 80
			const dist = Math.sqrt((cx - OX) ** 2 + (cy - OY) ** 2)
			hexes.push({ points: hexPoints(cx, cy), dist, key: `${r}-${c}` })
		}
	}

	const maxDist = Math.max(...hexes.map(h => h.dist))

	return (
		<svg
			className="absolute top-0 right-0 z-[2] h-full w-full sm:w-full md:w-[75%] pointer-events-none opacity-20 md:opacity-100"
			viewBox="0 0 900 900"
			preserveAspectRatio="xMidYMid slice"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transform: 'translateZ(0)' }}
		>
			<defs>
				<radialGradient id="hfade" cx="55%" cy="50%" r="58%">
					<stop offset="0%"   stopColor="white" stopOpacity="1" />
					<stop offset="40%"  stopColor="white" stopOpacity="1" />
					<stop offset="68%"  stopColor="white" stopOpacity="0.55" />
					<stop offset="88%"  stopColor="white" stopOpacity="0.15" />
					<stop offset="100%" stopColor="white" stopOpacity="0" />
				</radialGradient>

				<linearGradient id="hfadeL" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%"   stopColor="white" stopOpacity="0" />
					<stop offset="18%"  stopColor="white" stopOpacity="1" />
					<stop offset="100%" stopColor="white" stopOpacity="1" />
				</linearGradient>

				<mask id="hmaskR">
					<rect width="900" height="900" fill="url(#hfade)" />
				</mask>
				<mask id="hmaskL">
					<rect width="900" height="900" fill="url(#hfadeL)" />
				</mask>

				<linearGradient id="hScanGrad" x1="0" y1="0" x2="1" y2="0">
					<stop offset="0%"   stopColor="#6abf1e" stopOpacity="0" />
					<stop offset="50%"  stopColor="#6abf1e" stopOpacity="1" />
					<stop offset="100%" stopColor="#6abf1e" stopOpacity="0" />
				</linearGradient>

				<style>{`
          @keyframes hexFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @keyframes ripple {
            0%   { transform: scale(0); opacity: 0.7; }
            100% { transform: scale(1); opacity: 0; }
          }
          @keyframes hexPulse {
            0%, 100% { opacity: 0.45; }
            50%      { opacity: 1; }
          }
          @keyframes hexPulseSoft {
            0%, 100% { opacity: 0.25; }
            50%      { opacity: 0.6; }
          }
          @keyframes scanLine {
            0%   { transform: translateY(-900px); opacity: 0; }
            8%   { opacity: 0.06; }
            92%  { opacity: 0.06; }
            100% { transform: translateY(900px);  opacity: 0; }
          }
          @keyframes dotDrop {
            0%, 100% { transform: translateY(0px);  opacity: 0.9; }
            50%      { transform: translateY(-5px); opacity: 1; }
          }
          @keyframes dotDropSoft {
            0%, 100% { transform: translateY(0px);  opacity: 0.4; }
            50%      { transform: translateY(-4px); opacity: 0.7; }
          }

          // .hex-grid    { animation: hexFadeIn 2s ease forwards; will-change: opacity; }
          // .hex-green-1 { animation: hexPulse     2.8s ease-in-out         infinite; will-change: opacity; }
          // .hex-green-2 { animation: hexPulseSoft 3.6s ease-in-out 0.7s   infinite; will-change: opacity; }
          // .hex-green-3 { animation: hexPulseSoft 4.2s ease-in-out 1.4s   infinite; will-change: opacity; }
          // .hex-green-4 { animation: hexPulseSoft 3.2s ease-in-out 0.3s   infinite; will-change: opacity; }
          // .scan        { animation: scanLine 9s linear 1.5s infinite;     will-change: transform, opacity; }
          .hdot-1 { animation: dotDrop     3s   ease-in-out         infinite; will-change: transform, opacity; }
          .hdot-2 { animation: dotDrop     3.8s ease-in-out 0.5s   infinite; will-change: transform, opacity; }
          .hdot-3 { animation: dotDrop     4.4s ease-in-out 1.1s   infinite; will-change: transform, opacity; }
          .hdot-4 { animation: dotDropSoft 3.4s ease-in-out 0.8s   infinite; will-change: transform, opacity; }
          .hdot-5 { animation: dotDropSoft 4s   ease-in-out 1.6s   infinite; will-change: transform, opacity; }
          // .ripple-1 { animation: ripple 4s ease-out 0.5s infinite;  will-change: transform, opacity; }
          // .ripple-2 { animation: ripple 4s ease-out 1.8s infinite;  will-change: transform, opacity; }
          // .ripple-3 { animation: ripple 4s ease-out 3.1s infinite;  will-change: transform, opacity; }
        `}</style>
			</defs>

			<g mask="url(#hmaskL)">
				<g mask="url(#hmaskR)">

					{/* Hex grid — no per-hex animation delay, group handles fade */}
					<g className="hex-grid">
						{hexes.map(({ points, dist, key }) => {
							const t = dist / maxDist
							const op = 0.08 + (1 - t) * 0.27
							return (
								<polygon
									key={key}
									points={points}
									stroke="white"
									strokeOpacity={op}
									strokeWidth="0.8"
									fill="none"
								/>
							)
						})}
					</g>

					{/* Ripple rings — scale from 0, GPU accelerated */}
					<circle
						className="ripple-1"
						cx={OX} cy={OY} r="680"
						stroke="#6abf1e" strokeOpacity="0.5" strokeWidth="1.5" fill="none"
						style={{ transformOrigin: `${OX}px ${OY}px` }}
					/>
					<circle
						className="ripple-2"
						cx={OX} cy={OY} r="680"
						stroke="#6abf1e" strokeOpacity="0.35" strokeWidth="1" fill="none"
						style={{ transformOrigin: `${OX}px ${OY}px` }}
					/>
					<circle
						className="ripple-3"
						cx={OX} cy={OY} r="680"
						stroke="#6abf1e" strokeOpacity="0.2" strokeWidth="0.8" fill="none"
						style={{ transformOrigin: `${OX}px ${OY}px` }}
					/>

					{/* Scan line */}
					<rect className="scan" x="0" y="0" width="900" height="1.5" fill="url(#hScanGrad)" />

					{/* Green accent hexes */}
					<polygon className="hex-green-1"
					         points={hexPoints(OX, OY)}
					         stroke="#6abf1e" strokeWidth="1.5" fill="#6abf1e" fillOpacity="0.08" />
					<polygon className="hex-green-2"
					         points={hexPoints(OX - DX, OY - DY)}
					         stroke="#6abf1e" strokeWidth="1" fill="#6abf1e" fillOpacity="0.05" />
					<polygon className="hex-green-3"
					         points={hexPoints(OX + DX, OY + DY)}
					         stroke="#6abf1e" strokeWidth="1" fill="#6abf1e" fillOpacity="0.05" />
					<polygon className="hex-green-4"
					         points={hexPoints(OX - DX * 2, OY + DY)}
					         stroke="#6abf1e" strokeWidth="1" fill="#6abf1e" fillOpacity="0.04" />

					{/* Sparkle dots */}
					<circle className="hdot-1" cx={OX}          cy={OY}          r="3" fill="#6abf1e" />
					<circle className="hdot-2" cx={OX - DX}     cy={OY - DY}     r="2" fill="#6abf1e" />
					<circle className="hdot-3" cx={OX + DX}     cy={OY + DY}     r="2" fill="#6abf1e" />
					<circle className="hdot-4" cx={OX - DX * 2} cy={OY + DY}     r="2" fill="white"   />
					<circle className="hdot-5" cx={OX + DX}     cy={OY - DY * 2} r="2" fill="white"   />

				</g>
			</g>
		</svg>
	)
}

export default Skyline