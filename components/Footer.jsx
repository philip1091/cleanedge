import React from 'react'
import Logo from "@/components/svg/logo";
import Link from "next/link";

const Footer = ({t}) => {
	return (
		<footer className="bg-[#090f1b] px-6 md:px-16 py-10 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] items-center gap-8 border-t-4 border-green">

			<div>
				<Link href={"/"} className="flex items-center gap-4">
					<div className="w-[46px] h-[46px] relative shrink-0">
						<Logo />
					</div>
					<div className="leading-none font-secondary">
						<div className="font-[800] text-[1.7rem] tracking-[0.04em] uppercase text-white">
							CLEAN<span className="text-green">EDGE</span>
						</div>

						<div className="font-normal text-[0.65rem] tracking-[0.3em] uppercase text-gray-400">
							{t.title}
						</div>
					</div>
				</Link>
			</div>

			<ul className="footer-links flex flex-wrap justify-around gap-8 list-none">
				<li>
					<a
						href="#service"
						className="font-secondary text-[0.7rem] tracking-[0.15em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-green"
					>
						{t.services}
					</a>
				</li>

				<li>
					<a
						href="#process"
						className="font-secondary text-[0.7rem] tracking-[0.15em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-green"
					>
						{t.process}
					</a>
				</li>

				<li>
					<a
						href="#about"
						className="font-secondary text-[0.7rem] tracking-[0.15em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-green"
					>
						{t.about}
					</a>
				</li>

				<li>
					<a
						href="#contact"
						className="font-secondary text-[0.7rem] tracking-[0.15em] uppercase text-white/35 no-underline transition-colors duration-200 hover:text-green"
					>
						{t.contact}
					</a>
				</li>
			</ul>

			<div className="footer-right font-secondary text-[0.65rem] tracking-[0.1em] text-white/25 text-left lg:text-right leading-[1.7]">
				© 2026 CleanEdge Property Services Inc.<br />
				{t.text}<br />
				cleanedge.ca
			</div>

		</footer>
	)
}
export default Footer
