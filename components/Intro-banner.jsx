import React from 'react'

const IntroBanner = () => {
	return (
		<div className="services-strip bg-green flex justify-around overflow-hidden">
			<div className="strip-item border-r border-black/10  flex-1 flex items-center gap-4 p-6 relative transition-colors duration-500 hover:bg-green-dark ">
				<svg className="strip-icon text-navy opacity-80" width="22" height="22" viewBox="0 0 22 22" fill="none">
					<rect x="2" y="6" width="18" height="14" rx="1" stroke="#0e1b2e" strokeWidth="2"/>
					<path d="M7 6V4C7 3 7.9 2 9 2H13C14.1 2 15 3 15 4V6" stroke="#0e1b2e" strokeWidth="2"/>
				</svg>
				<span className="font-secondary font-bold text-xs tracking-[0.2em] uppercase text-navy">
			        Commercial Cleaning
			    </span>
			</div>
			<div className="strip-item border-r border-black/10  flex-1 flex items-center gap-4 p-6 relative transition-colors duration-200 hover:bg-green-dark ">
				<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
					<path d="M11 2 L19 7 L19 20 L3 20 L3 7 Z" stroke="#0e1b2e" strokeWidth="2"
					      strokeLinejoin="round"/>
					<rect x="8" y="13" width="6" height="7" stroke="#0e1b2e" strokeWidth="1.5"/>
				</svg>
				<span className="font-secondary font-bold text-xs tracking-[0.2em] uppercase text-navy">
			        Property Maintenance
			    </span>
			</div>
			<div className="strip-item border-r border-black/10  flex-1 flex items-center gap-4 p-6 relative transition-colors duration-200 hover:bg-green-dark ">
				<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
					<path d="M6 18 L6 8 Q6 4 11 4 Q16 4 16 8 L16 18" stroke="#0e1b2e" strokeWidth="2"
					      strokeLinecap="round"/>
					<line x1="3" y1="18" x2="19" y2="18" stroke="#0e1b2e" strokeWidth="2" strokeLinecap="round"/>
				</svg>
				<span className="font-secondary font-bold text-xs tracking-[0.2em] uppercase text-navy">
			        Day Porter Services
			    </span>
			</div>
			<div className="strip-item border-r border-black/10  flex-1 flex items-center gap-4 p-6 relative transition-colors duration-200 hover:bg-green-dark ">
				<svg className="strip-icon" width="22" height="22" viewBox="0 0 22 22" fill="none">
					<path d="M11 3 C7 3 4 6 4 9 C4 13 7 15 11 19 C15 15 18 13 18 9 C18 6 15 3 11 3Z" stroke="#0e1b2e"
					      strokeWidth="2" strokeLinejoin="round"/>
				</svg>
				<span className="font-secondary font-bold text-xs tracking-[0.2em] uppercase text-navy">
			        Eco-Friendly Solutions
			    </span>
			</div>
		</div>
	)
}
export default IntroBanner
