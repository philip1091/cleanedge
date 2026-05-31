import ContactInfo from "@/components/ContactInfo";
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
	return (
		<section
			id="contact"
			className="contact-section relative overflow-hidden bg-navy-mid px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-green after:content-['CONTACT'] after:absolute after:right-12 after:bottom-[-1rem] after:font-secondary after:font-black after:text-[11rem] after:text-white/[0.03] after:leading-none after:pointer-events-none"
		>
			<ContactInfo />
			<QuoteForm />
		</section>
	);
}