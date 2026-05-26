import Topbar from "@/components/Topbar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Category from "@/components/Category";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";

const Home = () => {
	return (
		<div className="w-full mx-auto overflow-hidden bg-white text-navy">
			{/*<Topbar />*/}
			<Header />
			<Hero />
			<Latest />
			<Category />
			<Benefits />
			<About />
			<Cta />
			<Footer />
			<Copyright />
		</div>
	)
}
export default Home
