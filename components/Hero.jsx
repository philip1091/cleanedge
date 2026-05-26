import Skyline from "@/components/svg/skyline"

const Hero = () => {
	return (
		<section className="hero bg-navy text-white min-h-[100vh] relative overflow-hidden flex items-center pt-18">
			<div className="hero-slash"></div>
			<div className="hero-green-bar absolute top-0 bottom-0 right-[45.76%] w-[5px]  bg-green skew-x-[-3.5deg] origin-top z-[3]"></div>

			<Skyline />
			<div className=" hero-content z-[5] max-w-[580px] p-16">
				{/*<div className="hero-slash absolute top-0 bottom-0 right-0 w-[50%] bg-navy-mid [clip-path:polygon(12%_0%,100%_0%,100%_100%,0%_100%)] z-[1]"></div>*/}

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
					<a href="#contact"
					   className="bg-green text-navy font-bold text-sm tracking-[0.2em] uppercase px-8 py-3.5 no-underline border-0 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-all duration-200 hover:bg-green-dark hover:-translate-y-[1px] font-secondary">Request
						a Free Quote</a>
					<a href="#services"
					   className="btn-outline bg-transparent text-white font-secondary font-semibold text-sm tracking-[0.2em] uppercase px-8 py-3.5 no-underline border-2 border-white/25 [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-[border-color,color] duration-200 hover:border-green hover:text-green">Our
						Services</a>
				</div>
			</div>
			{/*right content*/}


		</section>
	)
}
export default Hero
