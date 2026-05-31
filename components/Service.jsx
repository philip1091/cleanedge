import React from 'react'

const Service = () => {
	return (
		<section id="service" className="services bg-offwhite px-6 md:px-16 py-24 overflow-hidden">
			<div className="sec-header flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">

				<div>
					<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green">
						What We Offer
					</div>

					<h2 className="sec-title font-secondary font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] leading-none uppercase text-navy">
						OUR <span className="green text-green">SERVICES</span>
					</h2>
				</div>

				<a
					href="#contact"
					className="bg-green text-navy font-secondary font-bold text-xs tracking-[0.2em] uppercase px-7 py-3 no-underline [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-all duration-200 hover:bg-green-dark hover:-translate-y-[2px]"
				>
					View All Services →
				</a>
			</div>

			<div className="services-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

				<div className="svc-card relative overflow-hidden bg-white border border-light-gray p-8 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.15s_forwards]">
					<div className="svc-bg-num absolute top-4 right-5 font-secondary text-[4rem] font-black leading-none text-black/[0.04]">
						01
					</div>

					<div className="svc-icon-wrap mb-6 relative z-[1]">
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
							<rect x="3" y="7" width="20" height="16" rx="1" stroke="#6abf1e" strokeWidth="1.8"/>
							<path d="M8 7V5C8 4 8.9 3 10 3H16C17.1 3 18 4 18 5V7" stroke="#6abf1e" strokeWidth="1.8"/>
							<line x1="8" y1="14" x2="18" y2="14" stroke="#6abf1e" strokeWidth="1.4" strokeLinecap="round"/>
							<line x1="8" y1="18" x2="14" y2="18" stroke="#6abf1e" strokeWidth="1.4" strokeLinecap="round"/>
						</svg>
					</div>

					<div className="svc-name font-secondary font-bold text-[1.1rem] uppercase tracking-[0.12em] text-navy mb-4 relative z-[1]">
						Office Cleaning
					</div>

					<div className="svc-desc text-[0.95rem] leading-[1.75] text-gray relative z-[1]">
						Daily, weekly, or monthly programs for workspaces of all sizes. Desks, boardrooms, kitchens, and washrooms — spotless on your schedule.
					</div>
				</div>

				<div className="svc-card relative overflow-hidden bg-white border border-light-gray p-8 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
					<div className="svc-bg-num absolute top-4 right-5 font-secondary text-[4rem] font-black leading-none text-black/[0.04]">
						02
					</div>

					<div className="svc-icon-wrap mb-6 relative z-[1]">
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
							<path d="M13 3 L22 8 L22 23 L4 23 L4 8 Z" stroke="#6abf1e" strokeWidth="1.8" strokeLinejoin="round"/>
							<rect x="10" y="15" width="6" height="8" stroke="#6abf1e" strokeWidth="1.5"/>
							<circle cx="19" cy="12" r="2" stroke="#6abf1e" strokeWidth="1.5"/>
						</svg>
					</div>

					<div className="svc-name font-secondary font-bold text-[1.1rem] uppercase tracking-[0.12em] text-navy mb-4 relative z-[1]">
						Hospitality
					</div>

					<div className="svc-desc text-[0.95rem] leading-[1.75] text-gray relative z-[1]">
						Hotels, restaurants, and event spaces cleaned to the highest standards of hygiene. Guest-ready results, every shift.
					</div>
				</div>

				<div className="svc-card relative overflow-hidden bg-white border border-light-gray p-8 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.35s_forwards]">
					<div className="svc-bg-num absolute top-4 right-5 font-secondary text-[4rem] font-black leading-none text-black/[0.04]">
						03
					</div>

					<div className="svc-icon-wrap mb-6 relative z-[1]">
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
							<path d="M7 23 L7 12 Q7 5 13 5 Q19 5 19 12 L19 23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
							<line x1="3" y1="23" x2="23" y2="23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
							<line x1="10" y1="14" x2="16" y2="14" stroke="#6abf1e" strokeWidth="1.3" opacity="0.6"/>
						</svg>
					</div>

					<div className="svc-name font-secondary font-bold text-[1.1rem] uppercase tracking-[0.12em] text-navy mb-4 relative z-[1]">
						Day Porter Services
					</div>

					<div className="svc-desc text-[0.95rem] leading-[1.75] text-gray relative z-[1]">
						On-site staff during business hours to maintain lobbies, washrooms, and common areas. Continuous cleanliness, all day long.
					</div>
				</div>

				<div className="svc-card relative overflow-hidden bg-white border border-light-gray p-8 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.45s_forwards]">
					<div className="svc-bg-num absolute top-4 right-5 font-secondary text-[4rem] font-black leading-none text-black/[0.04]">
						04
					</div>

					<div className="svc-icon-wrap mb-6 relative z-[1]">
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
							<circle cx="13" cy="13" r="9" stroke="#6abf1e" strokeWidth="1.8"/>
							<path d="M13 7 L13 13 L18 17" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
						</svg>
					</div>

					<div className="svc-name font-secondary font-bold text-[1.1rem] uppercase tracking-[0.12em] text-navy mb-4 relative z-[1]">
						Post-Construction
					</div>

					<div className="svc-desc text-[0.95rem] leading-[1.75] text-gray relative z-[1]">
						Deep cleaning for newly built or renovated spaces. Dust, debris, paint residue — fully cleared before your grand opening.
					</div>
				</div>

				<div className="svc-card relative overflow-hidden bg-white border border-light-gray p-8 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.55s_forwards]">
					<div className="svc-bg-num absolute top-4 right-5 font-secondary text-[4rem] font-black leading-none text-black/[0.04]">
						05
					</div>

					<div className="svc-icon-wrap mb-6 relative z-[1]">
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
							<path d="M13 3 C9 3 5 6.5 5 10 C5 15 9 17.5 13 22 C17 17.5 21 15 21 10 C21 6.5 17 3 13 3Z" stroke="#6abf1e" strokeWidth="1.8" strokeLinejoin="round"/>
							<circle cx="13" cy="11" r="3" stroke="#6abf1e" strokeWidth="1.5"/>
						</svg>
					</div>

					<div className="svc-name font-secondary font-bold text-[1.1rem] uppercase tracking-[0.12em] text-navy mb-4 relative z-[1]">
						Eco-Friendly Cleaning
					</div>

					<div className="svc-desc text-[0.95rem] leading-[1.75] text-gray relative z-[1]">
						All ECOLOGO-certified, non-toxic products. Safer for your employees, better for the environment — no compromise on results.
					</div>
				</div>

				<div className="svc-card relative overflow-hidden bg-white border border-light-gray p-8 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.65s_forwards]">
					<div className="svc-bg-num absolute top-4 right-5 font-secondary text-[4rem] font-black leading-none text-black/[0.04]">
						06
					</div>

					<div className="svc-icon-wrap mb-6 relative z-[1]">
						<svg width="26" height="26" viewBox="0 0 26 26" fill="none">
							<circle cx="13" cy="10" r="5" stroke="#6abf1e" strokeWidth="1.8"/>
							<path d="M5 23 C5 18 21 18 21 23" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
						</svg>
					</div>

					<div className="svc-name font-secondary font-bold text-[1.1rem] uppercase tracking-[0.12em] text-navy mb-4 relative z-[1]">
						Healthcare & Medical
					</div>

					<div className="svc-desc text-[0.95rem] leading-[1.75] text-gray relative z-[1]">
						Hospital-grade disinfection for clinics and medical offices. Full compliance with Québec public health sanitation protocols.
					</div>
				</div>

			</div>
		</section>
	)
}
export default Service
