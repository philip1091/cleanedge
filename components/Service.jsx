import React from 'react'

const Service = ({t}) => {
	return (
		<section id="service" className="services bg-offwhite px-6 md:px-16 py-24 overflow-hidden">
			<div className="sec-header flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14 opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">

				<div>
					<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green">
						{t.intro}
					</div>

					<h2 className="sec-title font-secondary font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] leading-none uppercase text-navy">
						{t.title.part1} <span className="green text-green">{t.title.part2}</span>
					</h2>
				</div>

				<a
					href="#contact"
					className="bg-green text-navy font-secondary font-bold text-xs tracking-[0.2em] uppercase px-7 py-3 no-underline [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-all duration-200 hover:bg-green-dark hover:-translate-y-[2px]"
				>
					{t.button} →
				</a>
			</div>

			<div className="services-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
				{
					t.content.map((item, i) => (
						<div key={i} className="svc-card relative overflow-hidden bg-white border border-light-gray p-8 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.15s_forwards]">
							<div className="svc-bg-num absolute top-4 right-5 font-secondary text-[4rem] font-black leading-none text-black/[0.04]">
								0{i+1}
							</div>

							<div className="svc-icon-wrap mb-6 relative z-[1]">
								{item.icon}
							</div>

							<div className="svc-name font-secondary font-bold text-[1.1rem] uppercase tracking-[0.12em] text-navy mb-4 relative z-[1]">
								{item.title}
							</div>

							<div className="svc-desc text-[0.95rem] leading-[1.75] text-gray relative z-[1]">
								{item.description}
							</div>
						</div>
					))
				}





			</div>
		</section>
	)
}
export default Service
