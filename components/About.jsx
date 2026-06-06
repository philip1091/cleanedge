import React from 'react'

const About = ({t}) => {

	return (
		<section id="about" className="about grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
			<div className="about-left relative overflow-hidden flex flex-col justify-center bg-navy px-6 py-10 md:px-16 md:py-20 after:content-[''] after:absolute after:bottom-[-60px] after:right-[-60px] after:w-[280px] after:h-[280px] after:rounded-full after:border-[60px] after:border-green/10 before:content-[''] before:absolute before:top-[-40px] before:left-[-40px] before:w-[160px] before:h-[160px] before:rounded-full before:border-[40px] before:border-green/5">

				<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">
					{t.left.intro}
				</div>

				<h2 className="about-title font-secondary font-extrabold text-[clamp(2.2rem,3.5vw,3.2rem)] leading-none uppercase text-white mb-6 relative z-[1] opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
					{t.left.title.part1}<br />
					<span className="green text-green">{t.left.title.part2}</span><br />
					{t.left.title.part3}
				</h2>

				<p className="about-text text-base font-light leading-[1.8] text-white/55 relative z-[1] max-w-[400px] opacity-0 animate-[fadeUp_0.6s_0.4s_forwards]">
					{t.left.description}
				</p>

				<div className="about-pillars mt-10 flex flex-col gap-3 relative z-[1] opacity-0 animate-[fadeUp_0.6s_0.55s_forwards]">
					{t.left.checks.map((item, i) => (
						<div key={i} className="pillar flex items-center gap-3 font-secondary font-semibold text-[0.85rem] tracking-[0.15em] uppercase text-white/70">
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

			<div className="about-right relative flex flex-col justify-center bg-offwhite px-6 py-10 md:px-16 md:py-20 before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5px] before:h-full md:before:bg-green">

				<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.15s_forwards]">
					{t.right.intro}
				</div>

				<h3 className="font-secondary font-extrabold text-[2rem] uppercase text-navy opacity-0 animate-[fadeUp_0.6s_0.3s_forwards]">
					{t.right.title.part1}<br />
					<span className="text-green">{t.right.title.part2}</span>
				</h3>

				<div className="metric-grid reveal grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					{
						t.right.content.map((item, i) => (
							<div key={i} className="metric-card bg-white border border-light-gray p-7 border-b-[3px] border-b-green transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] opacity-0 animate-[fadeUp_0.6s_0.45s_forwards]">
								<div className="metric-num font-secondary font-black text-[1.6rem] leading-[1.2] text-navy">
									{item.title}<span className="text-green text-[1.2rem]">{item.title_side}</span>
								</div>
								<div className="metric-label font-secondary font-semibold text-[0.7rem] tracking-[0.2em] uppercase text-gray mt-1.5">
									{item.subTitle}
								</div>
								<p className="text-[0.78rem] text-gray mt-2 leading-[1.5]">
									{item.description}
								</p>
							</div>
						))
					}

				</div>
			</div>
		</section>
	)
}

export default About