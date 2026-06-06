import ContactInfo from "@/components/ContactInfo";
import QuoteForm from "@/components/QuoteForm";

export default function Contact({t}) {
	return (
		<section
			id="contact"
			className="contact-section relative overflow-hidden bg-navy-mid px-6 py-10 md:px-16 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start "
		>
			<ContactInfo t={t} />
			<QuoteForm t={t} />
		</section>
	);
}