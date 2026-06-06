import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroBanner from "@/components/Intro-banner";
import About from "@/components/About";
import Service from "@/components/Service";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { content } from "@/components/data/content";

const Home = async ({ params }) => {
	const { lang } = await params;

	const currentLang = lang === "fr" ? "fr" : "en";
	const t = content[currentLang];
	return (
		<div className="w-full mx-auto overflow-hidden text-navy">
			{/*<Topbar />*/}
			<Header lang={lang} t={t.header} />
			<Hero t={t.hero} />
			<IntroBanner t={t.banner_intro} />
			<About t={t.about} />
			<Service t={t.services} />
			<Process t={t.process}  />
			<Testimonial t={t.testimonial} />
			<Contact t={t.contact} />
			<Footer t={t.footer} />
		</div>
	)
}
export default Home
