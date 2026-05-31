import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetClose,
	SheetHeader,
	SheetTitle,
	SheetTrigger}  from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import Logo from "@/components/svg/logo";

const Sidenav = () => {
	return (
		<Sheet>
			<SheetTrigger className="cursor-pointer flex items-center justify-center">
				<MdOutlineMenu className="text-3xl text-green" />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col h-full pt-16">
					<SheetHeader>
						<SheetTitle className=" max-w-max mx-auto mb-48">
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
						</SheetTitle>
						<SheetDescription className="sr-only">
							Navigation Menu
						</SheetDescription>
					</SheetHeader>
					<nav className="flex flex-col items-center gap-12  font-secondary">
						<SheetClose>
							<a href="#service" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">Services</a>
						</SheetClose>
						<SheetClose>
							<a href="#process" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">Process</a>
						</SheetClose>
						<SheetClose>
							<a href="#about" className="font-semibold text-[0.8rem] tracking-[0.18em] uppercase text-white/70 no-underline transition-colors duration-200 text hover:text-green">About</a>
						</SheetClose>
						<SheetClose>
							<a href="#contact" className="btn-transition bg-green text-navy px-[1.4rem] py-[0.55rem] font-bold text-[0.8rem] tracking-[0.18em] uppercase no-underline duration-200 hover:bg-green-dark">Get a quote</a>
						</SheetClose>
					</nav>
				</div>
			</SheetContent>
		</Sheet>
	)
}
export default Sidenav
