import Skyline from "@/components/svg/skyline"
import dynamic from 'next/dynamic';



const Hero = () => {
	return (
		<>
			<section className="hero bg-navy text-white min-h-[100vh] mt-[75px] p-6 relative overflow-hidden ">
				<Skyline />
				<div className=" hero-content z-[5] max-w-[580px] md:p-16">
					<div className="hero-tag inline-flex items-center gap-[0.6rem] bg-green-transparent border-green-transparent-border border-2 px-3 py-1 mb-8 animate-[fadeUp_0.6s_0.1s_forwards]">
						<div className="hero-tag-dot w-1.5 h-1.5 rounded-full bg-red-600 animate-[pulse_2s_infinite]"></div>
						<span
							className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-green font-secondary">Montréal's Commercial Cleaning Leaders</span>
					</div>

					<h1 className="hero-title font-secondary leading-[0.95] tracking-[0.02em] opacity-0 font-extrabold uppercase text-[clamp(3.2rem,6vw,5.5rem)] animate-[fadeUp_0.6s_0.25s_forwards]">
						CLEANER<br/>
						<span className="accent text-green">SPACES.</span><br/>
						<span className="italic font-bold">BETTER PLACES.</span>
					</h1>
					<p className="hero-tagline font-secondary text-base font-semibold tracking-[0.3em] uppercase text-green mt-[1.2rem] mb-8 opacity-0 animate-[fadeUp_0.6s_0.4s_forwards]">Reliable
						· Professional · Essential</p>
					<p className="hero-desc text-[1.05rem] font-light leading-[1.75] text-white/60 max-w-[440px] mb-10 opacity-0 animate-[fadeUp_0.6s_0.55s_forwards]">CleanEdge
						delivers premium commercial cleaning, property maintenance, and day
						porter services across Greater Montréal — bilingual, bonded, and built around your schedule.</p>
					<div className="hero-btns flex flex-wrap gap-1 opacity-0 animate-[fadeUp_0.6s_0.7s_forwards]">
						<a href="#services"
						   className="btn-outline mb-6  bg-transparent text-white font-secondary font-semibold text-sm tracking-[0.2em]   uppercase px-8 py-3.5 no-underline border-2 border-white/25 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-[border-color,color] duration-200 hover:border-green hover:text-green">Our
							Services</a>
						<a href="#contact"
						   className="bg-green mb-6 ml-4 md:ml-1 text-navy font-bold text-sm tracking-[0.2em]  uppercase px-8 py-3.5 no-underline border-0 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-all duration-200 hover:bg-green-dark hover:-translate-y-[1px] font-secondary">Request
							a Free Quote</a>

					</div>
				</div>
				<div className="hero-stats grid grid-cols-2 lg:grid-cols-4 z-[5] border-white/[0.06] bg-navy text-white opacity-0 animate-[fadeUp_0.6s_0.9s_forwards]">
					<div
						className="stat-cell px-[1.4rem] py-[2rem] border-white/[0.06] flex items-center gap-4">
						<svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
							<path d="M14 4 C9 4 5 8 5 13 C5 18 9 22 14 22" stroke="#6abf1e" strokeWidth="1.8"
							      strokeLinecap="round"/>
							<path d="M14 22 C19 22 23 18 23 13" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
							      strokeLinejoin="2 2"/>
							<path d="M10 13 L13 16 L20 9" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
							      strokeLinejoin="round"/>
						</svg>
						<div>
							<div className="stat-val font-secondary text-[1.6rem] font-extrabold text-[var(--white)] leading-none">Free</div>
							<div className="stat-lbl font-secondary text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--gray)] mt-[0.2rem]">Site Assessment</div>
						</div>
					</div>
					<div
						className="stat-cell px-[1.4rem] py-[2rem] border-white/[0.06] flex items-center gap-4">
						<svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
							<circle cx="14" cy="14" r="10" stroke="#6abf1e" strokeWidth="1.8"/>
							<path d="M14 8V14L18 17" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"/>
						</svg>
						<div>
							<div
								className="stat-val font-secondary text-[1.6rem] font-extrabold text-[var(--white)] leading-none">24h
							</div>
							<div
								className="stat-lbl font-secondary text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--gray)] mt-[0.2rem]">Quote Turnaround</div>
						</div>
					</div>
					<div
						className="stat-cell px-[1.4rem] py-[2rem] border-white/[0.06] flex items-center gap-4">
						<svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
							<path d="M14 4 L17 10 L24 11 L19 16 L20 23 L14 20 L8 23 L9 16 L4 11 L11 10 Z" stroke="#6abf1e"
							      strokeWidth="1.8" strokeLinejoin="round"/>
						</svg>
						<div>
							<div
								className="stat-val font-secondary text-[1.6rem] font-extrabold text-[var(--white)] leading-none">100%
							</div>
							<div
								className="stat-lbl font-secondary text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--gray)] mt-[0.2rem]">Satisfaction Guarantee</div>
						</div>
					</div><div
					className="stat-cell px-[1.4rem] py-[2rem] border-white/[0.06] flex items-center gap-4">
					<svg className="stat-icon text-green shrink-0" width="28" height="28" viewBox="0 0 28 28" fill="none">
						<path d="M6 14 L10 8 L14 12 L18 6 L22 10" stroke="#6abf1e" strokeWidth="1.8" strokeLinecap="round"
						      strokeLinejoin="round"/>
						<line x1="4" y1="22" x2="24" y2="22" stroke="#6abf1e" strokeWidth="1.5" strokeLinecap="round"/>
						<circle cx="22" cy="7" r="3" stroke="#6abf1e" strokeWidth="1.5"/>
					</svg>
					<div>
						<div
							className="stat-val font-secondary text-[1.6rem] font-extrabold text-[var(--white)] leading-none">Bilingual
						</div>
						<div
							className="stat-lbl font-secondary text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-[var(--gray)] mt-[0.2rem]">FR
							/ EN Service
						</div>
					</div>
				</div>
				</div>
			</section>
		</>
	)
}
export default Hero
