import Link from "next/link"
import Sidenav from "@/components/Sidenav";
import Logo from "./svg/logo"

const Header = () => {
	return (
		<div className=" mx-auto bg-navy border-b-[5px] border-green">
			<div className="page-container mx-auto">
				<div className="text-white flex justify-between items-center p-3 md:w-auto gap-8">
					<Link href={"/"} className="flex items-center gap-4">
						<div className="w-[46px] h-[46px] relative shrink-0">
							<Logo />
						</div>
						<div className="leading-none font-secondary">
							<div className="font-[800] text-[1.7rem] tracking-[0.04em] uppercase text-white">
								CLEAN<span className="text-green">EDGE</span>
							</div>

							<div className="font-normal text-[0.65rem] tracking-[0.3em] uppercase text-gray-400">
								Property Services
							</div>
						</div>
					</Link>
					<div className="xl:hidden md:hidden ">
						<Sidenav />
					</div>
					<nav className="hidden md:flex items-center justify-end gap-4 w-[360px] font-secondary">
						<a href="#service" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">Services</a>
						<a href="#process" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">Process</a>
						<a href="#about" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">About</a>
						<a href="#" className="btn-transition bg-green text-navy px-[1.4rem] py-[0.55rem] font-bold text-[0.8rem] tracking-[0.18em] uppercase no-underline duration-200 hover:bg-green-dark">Get a quote</a>
					</nav>
				</div>
			</div>
		</div>
	)
}
export default Header
