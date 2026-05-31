import React from 'react'

const Testimonial = () => {
	return (
		<section className="testimonials bg-offwhite px-6 md:px-16 py-20 overflow-hidden">

			<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">
				Now Accepting Clients
			</div>

			<h2 className="sec-title font-secondary font-extrabold text-[clamp(2.4rem,3.5vw,4.5rem)] leading-none uppercase text-navy opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
				BE AMONG OUR <span className="text-green">FIRST CLIENTS</span>
			</h2>

			<p className="text-center text-gray max-w-[560px] mx-auto mb-14 mt-14 text-base leading-[1.8] opacity-0 animate-[fadeUp_0.6s_0.4s_forwards]">
				CleanEdge is launching in Montréal and accepting our first commercial accounts. Join early and lock in founding rates — permanently — while helping shape a new standard in property services.
			</p>

			<div className="testi-grid grid grid-cols-1 xl:grid-cols-3 gap-6 mb-16">

				<div className="testi-card bg-white p-9 border-t-4 border-green shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[4px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] text-center opacity-0 animate-[fadeUp_0.6s_0.5s_forwards]">
					<div className="text-[2rem] mb-4">🎯</div>

					<div className="font-secondary font-extrabold text-[1.2rem] uppercase text-green mb-3">
						Founding Rate Lock
					</div>

					<p className="testi-text text-[0.97rem] font-normal leading-[1.8] text-[#444]">
						Sign on as one of our first 10 clients and your introductory rate is locked in for the life of the contract — no annual increases.
					</p>
				</div>

				<div className="testi-card bg-white p-9 border-t-4 border-green shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[4px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] text-center opacity-0 animate-[fadeUp_0.6s_0.65s_forwards]">
					<div className="text-[2rem] mb-4">✅</div>

					<div className="font-secondary font-extrabold text-[1.2rem] uppercase text-green mb-3">
						First Month at 20% Off
					</div>

					<p className="testi-text text-[0.97rem] font-normal leading-[1.8] text-[#444]">
						New accounts receive 20% off their first full month of service — no promo codes, no conditions. Just our way of earning your trust.
					</p>
				</div>

				<div className="testi-card bg-white p-9 border-t-4 border-green shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[4px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] text-center opacity-0 animate-[fadeUp_0.6s_0.8s_forwards]">
					<div className="text-[2rem] mb-4">🔄</div>

					<div className="font-secondary font-extrabold text-[1.2rem] uppercase text-green mb-3">
						Re-Clean Guarantee
					</div>

					<p className="testi-text text-[0.97rem] font-normal leading-[1.8] text-[#444]">
						If any visit doesn't meet your expectations, we return within 24 hours and re-clean at absolutely no charge. No arguments, no forms.
					</p>
				</div>

			</div>

			<div className="section-tag justify-center font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-6 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.95s_forwards]">
				Credentials & Standards
			</div>

			<div className="flex flex-wrap justify-center gap-4 max-w-[860px] mx-auto opacity-0 animate-[fadeUp_0.6s_1.1s_forwards]">

				{[
					["🛡", "Fully Insured & Bonded"],
					["🌿", "ECOLOGO-Certified Products"],
					["✔", "Background-Checked Team"],
					["🏥", "Québec Health Protocol Compliant"],
					["🗣", "Bilingual Service — FR / EN"],
					["📋", "Digital Checklists & Reporting"],
				].map(([icon, text]) => (
					<div
						key={text}
						className="bg-white/5 border border-green/25 px-6 py-4  flex items-center gap-3"
					>
						<span className="text-green text-[1.2rem]">{icon}</span>

						<span className="font-secondary text-[0.75rem] font-bold tracking-[0.18em] uppercase text-navy">
					{text}
				</span>
					</div>
				))}
			</div>
		</section>
	)
}
export default Testimonial
