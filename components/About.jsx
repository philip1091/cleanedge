import React from 'react'

const About = () => {
	return (
		<section id="about" className="about grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
			<div className="about-left relative overflow-hidden flex flex-col justify-center bg-navy px-16 py-20 after:content-[''] after:absolute after:bottom-[-60px] after:right-[-60px] after:w-[280px] after:h-[280px] after:rounded-full after:border-[60px] after:border-green/10 before:content-[''] before:absolute before:top-[-40px] before:left-[-40px] before:w-[160px] before:h-[160px] before:rounded-full before:border-[40px] before:border-green/5">

				<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">
					Who We Are
				</div>

				<h2 className="about-title font-secondary font-extrabold text-[clamp(2.2rem,3.5vw,3.2rem)] leading-none uppercase text-white mb-6 relative z-[1] opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
					MONTRÉAL&apos;S<br />
					<span className="green text-green">TRUSTED</span><br />
					CLEANING PARTNER
				</h2>

				<p className="about-text text-base font-light leading-[1.8] text-white/55 relative z-[1] max-w-[400px] opacity-0 animate-[fadeUp_0.6s_0.4s_forwards]">
					Founded in Montréal, CleanEdge was built on a simple promise: show up, do the job right, every single time.
					We serve offices, hospitality venues, healthcare facilities, and more — with bilingual staff who understand your business.
				</p>

				<div className="about-pillars mt-10 flex flex-col gap-3 relative z-[1] opacity-0 animate-[fadeUp_0.6s_0.55s_forwards]">
					{["Fully insured & bonded", "Background-checked team", "Bilingual service — FR/EN", "100% eco-certified products"].map((item) => (
						<div key={item} className="pillar flex items-center gap-3 font-secondary font-semibold text-[0.85rem] tracking-[0.15em] uppercase text-white/70">
							<div className="pillar-check w-[22px] h-[22px] bg-green rounded-full flex items-center justify-center shrink-0">
								<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
									<path d="M2 6 L5 9 L10 3" stroke="#0e1b2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
							{item}
						</div>
					))}
				</div>
			</div>

			<div className="about-right relative flex flex-col justify-center bg-offwhite px-16 py-20 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full before:bg-green">

				<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.15s_forwards]">
					Our Commitment
				</div>

				<h3 className="font-secondary font-extrabold text-[2rem] uppercase text-navy opacity-0 animate-[fadeUp_0.6s_0.3s_forwards]">
					PROMISES WE<br />
					<span className="text-green">STAND BEHIND</span>
				</h3>

				<div className="metric-grid reveal grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					<div className="metric-card bg-white border border-light-gray p-7 border-b-[3px] border-b-green transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.45s_forwards]">
						<div className="metric-num font-secondary font-black text-[1.6rem] leading-[1.2] text-navy">
							Free<span className="text-green text-[1.2rem]">↗</span>
						</div>
						<div className="metric-label font-secondary font-semibold text-[0.7rem] tracking-[0.2em] uppercase text-gray mt-1.5">
							No-Obligation Site Assessment
						</div>
						<p className="text-[0.78rem] text-gray mt-2 leading-[1.5]">
							We visit your property, evaluate your needs, and design a custom plan — at zero cost to you.
						</p>
					</div>

					<div className="metric-card bg-white border border-light-gray p-7 border-b-[3px] border-b-green transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.55s_forwards]">
						<div className="metric-num font-secondary font-black text-[2.8rem] leading-none text-navy">
							24<span className="text-green text-[2rem]">h</span>
						</div>
						<div className="metric-label font-secondary font-semibold text-[0.7rem] tracking-[0.2em] uppercase text-gray mt-1.5">
							Quote Guarantee
						</div>
						<p className="text-[0.78rem] text-gray mt-2 leading-[1.5]">
							Clear, itemized pricing delivered within 24 hours. No vague estimates, no hidden fees.
						</p>
					</div>

					<div className="metric-card bg-white border border-light-gray p-7 border-b-[3px] border-b-green transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.65s_forwards]">
						<div className="metric-num font-secondary font-black text-[1.6rem] leading-[1.2] text-navy">
							Lock<span className="text-green text-[1.2rem]">🔒</span>
						</div>
						<div className="metric-label font-secondary font-semibold text-[0.7rem] tracking-[0.2em] uppercase text-gray mt-1.5">
							Founding Client Rate
						</div>
						<p className="text-[0.78rem] text-gray mt-2 leading-[1.5]">
							Our first clients lock in introductory pricing — permanently. Be among the first to benefit.
						</p>
					</div>

					<div className="metric-card bg-white border border-light-gray p-7 border-b-[3px] border-b-green transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.75s_forwards]">
						<div className="metric-num font-secondary font-black text-[2.8rem] leading-none text-navy">
							100<span className="text-green text-[2rem]">%</span>
						</div>
						<div className="metric-label font-secondary font-semibold text-[0.7rem] tracking-[0.2em] uppercase text-gray mt-1.5">
							Satisfaction Guarantee
						</div>
						<p className="text-[0.78rem] text-gray mt-2 leading-[1.5]">
							Not happy with a visit? We return and re-clean at no charge. Your standards are our standards.
						</p>

					</div>
				</div>
			</div>
		</section>
	)
}

export default About