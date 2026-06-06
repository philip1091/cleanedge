import Link from "next/link"
import Sidenav from "@/components/Sidenav";
import Logo from "./svg/logo"
import { MdLanguage } from "react-icons/md";

const Header = ({lang, t}) => {
	const nextLang = lang === "en" ? "fr" : "en";

	return (
		<div className=" mx-auto bg-navy border-b-[5px] border-green h-[77px] w-full fixed z-5">
			<div className="page-container mx-auto">
				<div className="text-white flex justify-between items-center p-3 md:w-auto gap-8">
					<Link href={"/"} className="flex items-center gap-4">
						<div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] relative shrink-0">
							<Logo />
						</div>
						<div className="leading-none font-secondary">
							<div className="font-[800] text-[1.4rem] md:text-[1.7rem] tracking-[0.04em] uppercase text-white">
								CLEAN<span className="text-green">EXCEL</span>
							</div>

							<div className="font-normal text-[0.55rem] md:text-[0.65rem] tracking-[0.3em] uppercase text-gray-400">
								{t.title}
							</div>
						</div>
					</Link>
					<div className="flex lg:hidden gap-2">
						<Link href={`/${nextLang}`} className="flex items-center gap-2 font-secondary text-green bg-green-transparent border-green-transparent-border border-2 px-3 py-1 btn-transition hover:border-[#7fde2b66]">
							<MdLanguage />
							<span className="font-bold text-[0.9rem] lg:text-[1rem]">
								{lang === "fr" ? "EN " : "FR "}
							</span>
						</Link>
						<Sidenav />
					</div>
					<nav className="hidden lg:flex items-center justify-end gap-4 min-w-[460px] font-secondary">
						<Link href={`/${nextLang}`} className="flex items-center gap-2  text-green bg-green-transparent border-green-transparent-border border-2 px-3 py-1 btn-transition hover:border-[#7fde2b66]">
							<MdLanguage />
							<span className="text-[0.65rem]">
								{lang === "fr" ? "Switch to " : "Changer en "}
							</span>
							<span className="font-bold">
								{lang === "fr" ? "ENGLISH " : "FRANÇAIS "}
							</span>
						</Link>
						<a href="#about" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">{t.about}</a>
						<a href="#service" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">{t.services}</a>
						<a href="#process" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">{t.process}</a>
						<a href="#contact" className="btn-transition bg-green text-navy px-[1.4rem] py-[0.55rem] font-bold text-[0.8rem] tracking-[0.18em] uppercase no-underline duration-200 hover:bg-green-dark">{t.contact}</a>
					</nav>
				</div>
			</div>
		</div>
	)
}
export default Header
