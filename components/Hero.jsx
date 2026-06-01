import Skyline from "@/components/svg/skyline"
import dynamic from 'next/dynamic';



const Hero = ({t}) => {
	return (
		<>
			<section className="hero bg-navy text-white min-h-[100vh] mt-[75px] p-6 relative overflow-hidden ">
				<Skyline />
				<div className=" hero-content z-[5] max-w-[680px] md:p-16">
					<div className="hero-tag inline-flex items-center gap-[0.6rem] bg-green-transparent border-green-transparent-border border-2 px-3 py-1 mb-8 animate-[fadeUp_0.6s_0.1s_forwards]">
						<div className="hero-tag-dot w-1.5 h-1.5 rounded-full bg-red-600 animate-[pulse_2s_infinite]"></div>
						<span
							className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-green font-secondary">
							{t.banner}
						</span>
					</div>

					<h1 className="hero-title font-secondary leading-[0.95] tracking-[0.02em] opacity-0 font-extrabold uppercase text-[clamp(3.2rem,6vw,5.5rem)] animate-[fadeUp_0.6s_0.25s_forwards]">
						{t.title.part1}<br/>
						<span className="accent text-green">{t.title.part2}</span><br/>
						<span className="italic font-bold">{t.title.part3}</span>
					</h1>
					<p className="hero-tagline font-secondary text-base font-semibold tracking-[0.3em] uppercase text-green mt-[1.2rem] mb-8 opacity-0 animate-[fadeUp_0.6s_0.4s_forwards]">
						{
							t.sub_title.map((item, i) => (
								<span key={i}>{item}</span>
							))
						}
					</p>
					<p className="hero-desc text-[1.05rem] font-light leading-[1.75] text-white/60 max-w-[440px] mb-10 opacity-0 animate-[fadeUp_0.6s_0.55s_forwards]">CleanEdge
						{t.description}
					</p>
					<div className="hero-btns flex flex-wrap gap-1 opacity-0 animate-[fadeUp_0.6s_0.7s_forwards]">
						<a href="#service"
						   className="btn-outline mb-6  bg-transparent text-white font-secondary font-semibold text-sm tracking-[0.2em]   uppercase px-8 py-3.5 no-underline border-2 border-white/25 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-[border-color,color] duration-200 hover:border-green hover:text-green">
							{t.button1}
						</a>
						<a href="#contact"
						   className="bg-green mb-6 ml-4 md:ml-1 text-navy font-bold text-sm tracking-[0.2em]  uppercase px-8 py-3.5 no-underline border-0 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-all duration-200 hover:bg-green-dark hover:-translate-y-[1px] font-secondary">
							{t.button2}
						</a>

					</div>
				</div>
				<div className="hero-stats grid grid-cols-2 lg:grid-cols-4 z-[5] border-white/[0.06] bg-navy text-white opacity-0 animate-[fadeUp_0.6s_0.9s_forwards]">
					{
						t.hero_foot.map((item, i) => (
							<div
								key={i} className="stat-cell px-[1.4rem] py-[2rem] border-white/[0.06] flex items-center gap-4">
								{item.icon}
								<div>
									<div className="stat-val font-secondary text-[1.6rem] font-extrabold text-[var(--white)] leading-none">{item.title}</div>
									<div className="stat-lbl font-secondary text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--gray)] mt-[0.2rem]">{item.description}</div>
								</div>
							</div>
						))
					}

				</div>
			</section>
		</>
	)
}
export default Hero
