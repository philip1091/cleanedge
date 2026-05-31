import React from 'react'

const Footer = () => {
	return (
		<footer className="bg-[#090f1b] px-6 md:px-16 py-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-8 border-t-4 border-green">

			<div>
				<div className="footer-logo font-secondary font-extrabold text-[1.3rem] tracking-[0.06em] uppercase text-white">
					CLEAN<span className="text-green">EDGE</span>
				</div>

				<div className="footer-sub font-secondary text-[0.6rem] tracking-[0.25em] uppercase text-gray mt-1">
					Property Services · Montréal, Québec
				</div>
			</div>

			<ul className="footer-links flex flex-wrap justify-center gap-8 list-none">
				<li>
					<a
						href="#services"
						className="font-secondary text-[0.7rem] tracking-[0.15em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-green"
					>
						Services
					</a>
				</li>

				<li>
					<a
						href="#process"
						className="font-secondary text-[0.7rem] tracking-[0.15em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-green"
					>
						Process
					</a>
				</li>

				<li>
					<a
						href="#about"
						className="font-secondary text-[0.7rem] tracking-[0.15em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-green"
					>
						About
					</a>
				</li>

				<li>
					<a
						href="#contact"
						className="font-secondary text-[0.7rem] tracking-[0.15em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-green"
					>
						Contact
					</a>
				</li>
			</ul>

			<div className="footer-right font-secondary text-[0.65rem] tracking-[0.1em] text-white/25 text-left lg:text-right leading-[1.7]">
				© 2026 CleanEdge Property Services Inc.<br />
				Bilingual · Bonded · Insured<br />
				cleanedge.ca
			</div>

		</footer>
	)
}
export default Footer
