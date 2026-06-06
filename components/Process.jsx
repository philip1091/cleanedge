import React from 'react'

const Process = ({t}) => {
	return (
		<section id="process" className="process relative overflow-hidden bg-navy px-6 py-10 md:px-16 md:py-20 before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-green">

			<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">
				{t.intro}
			</div>

			<h2 className="sec-title font-secondary font-extrabold text-[clamp(2.4rem,5vw,4.5rem)] leading-none uppercase text-white opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
				{t.title.part1} <span className="text-green">{t.title.part2}</span>
			</h2>

			<div className="process-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-12">
				{
					t.content.map((item, i) => (
						<div key={i} className="proc-step relative pt-4 opacity-0 animate-[fadeUp_0.6s_0.35s_forwards] after:content-['→'] after:absolute after:top-[1.4rem] after:right-[-1.2rem] after:text-green after:text-[1.2rem] after:font-secondary xl:after:block after:hidden">
							<div className="proc-num font-secondary font-black text-[3.5rem] text-green leading-none mb-2 opacity-90">
								0{i+1}
							</div>

							<div className="proc-title font-secondary font-bold text-[1.05rem] tracking-[0.1em] uppercase text-white mb-3">
								{item.title}
							</div>

							<div className="proc-desc text-[0.88rem] font-light leading-[1.7] text-white/45">
								{item.description}
							</div>
						</div>
					))
				}
			</div>
		</section>
	)
}
export default Process
