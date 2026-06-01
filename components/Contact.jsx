import ContactInfo from "@/components/ContactInfo";
import QuoteForm from "@/components/QuoteForm";

export default function Contact({t}) {
	return (
		<section
			id="contact"
			className="contact-section relative overflow-hidden bg-navy-mid px-6 md:px-16 py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start "
		>
			<ContactInfo t={t} />
			<QuoteForm />
		</section>
	);
}