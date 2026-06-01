import React from 'react'

const Testimonial = ({t}) => {
	return (
		<section className="testimonials bg-offwhite px-6 md:px-16 py-20 overflow-hidden">

			<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">
				{t.intro}
			</div>

			<h2 className="sec-title font-secondary font-extrabold text-[clamp(2.4rem,3.5vw,4.5rem)] leading-none uppercase text-navy opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
				{t.title.part1} <span className="text-green">{t.title.part2}</span>
			</h2>

			<p className="text-center text-gray max-w-[560px] mx-auto mb-14 mt-14 text-base leading-[1.8] opacity-0 animate-[fadeUp_0.6s_0.4s_forwards]">
				{t.description}
			</p>

			<div className="testi-grid grid grid-cols-1 xl:grid-cols-3 gap-6 mb-16">
				{
					t.content.map((item, i) => (
						<div key={i} className="testi-card bg-white p-9 border-t-4 border-green shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-[4px] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] text-center opacity-0 animate-[fadeUp_0.6s_0.5s_forwards]">
							<div className="text-[2rem] mb-4">{item.icon}</div>

							<div className="font-secondary font-extrabold text-[1.2rem] uppercase text-green mb-3">
								{item.title}
							</div>

							<p className="testi-text text-[0.97rem] font-normal leading-[1.8] text-[#444]">
								{item.description}
							</p>
						</div>
					))
				}

			</div>

			<div className="section-tag justify-center font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-6 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.95s_forwards]">
				Credentials & Standards
			</div>

			<div className="flex flex-wrap justify-center gap-4 max-w-[860px] mx-auto opacity-0 animate-[fadeUp_0.6s_1.1s_forwards]">

				{t.creds.map(([icon, text]) => (
					<div
						key={text}
						className="bg-white/5 border border-green px-6 py-4  flex items-center gap-3"
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
