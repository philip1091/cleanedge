"use client";

import { useState } from "react";

export default function QuoteForm() {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		company: "",
		service: "",
		message: "",
	});

	const [success, setSuccess] = useState(false);

	function handleChange(e) {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();
		console.log(formData);
		setSuccess(true);
	}

	const inputClass = "form-input w-full bg-white/[0.04] border border-white/10 text-white text-[0.9rem] px-4 py-3.5 outline-none transition-[border-color,background] duration-200 focus:border-green focus:bg-green/5 placeholder:text-white/20";
	const labelClass = "form-label font-secondary text-[0.6rem] font-bold tracking-[0.25em] uppercase text-gray";

	if (success) {
		return (
			<div className="form-success relative z-[1] text-center p-8 bg-green/10 border border-green/30 opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
				<div className="form-success-icon text-[2.5rem] mb-3">✅</div>
				<div className="form-success-msg font-secondary font-bold text-[1.1rem] uppercase tracking-[0.1em] text-green">
					Request Received!
				</div>
				<div className="form-success-sub text-[0.85rem] text-white/40 mt-2">
					We&apos;ll follow up within one business day with your free quote.
				</div>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="contact-form relative z-[1] opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
			<div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div className="form-group flex flex-col gap-2">
					<label className={labelClass}>First Name</label>
					<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Jean" required className={inputClass} />
				</div>

				<div className="form-group flex flex-col gap-2">
					<label className={labelClass}>Last Name</label>
					<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Tremblay" required className={inputClass} />
				</div>
			</div>

			<div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div className="form-group flex flex-col gap-2">
					<label className={labelClass}>Email</label>
					<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="jean@company.ca" required className={inputClass} />
				</div>

				<div className="form-group flex flex-col gap-2">
					<label className={labelClass}>Phone</label>
					<input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="514 000-0000" required className={inputClass} />
				</div>
			</div>

			<div className="form-group flex flex-col gap-2 mb-4">
				<label className={labelClass}>Company / Property</label>
				<input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your business or property name" className={inputClass} />
			</div>

			<div className="form-group flex flex-col gap-2 mb-4">
				<label className={labelClass}>Service Required</label>
				<select name="service" value={formData.service} onChange={handleChange} required className={`${inputClass} form-select cursor-pointer appearance-none pr-10`}>
					<option value="" disabled>Select a service…</option>
					<option value="Office Cleaning">Office Cleaning</option>
					<option value="Hospitality Cleaning">Hospitality Cleaning</option>
					<option value="Day Porter Services">Day Porter Services</option>
					<option value="Post-Construction Cleaning">Post-Construction Cleaning</option>
					<option value="Eco-Friendly Cleaning">Eco-Friendly Cleaning</option>
					<option value="Healthcare & Medical">Healthcare & Medical</option>
					<option value="Not sure — I need a consultation">Not sure — I need a consultation</option>
				</select>
			</div>

			<div className="form-group flex flex-col gap-2">
				<label className={labelClass}>Message</label>
				<textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your space and requirements…" required className={`${inputClass} form-textarea min-h-[120px] resize-y`} />
			</div>

			<button type="submit" className="form-submit w-full mt-6 bg-green text-navy font-secondary font-extrabold text-[0.8rem] tracking-[0.25em] uppercase px-8 py-4 border-0 cursor-pointer [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-all duration-200 hover:bg-[#7ed622] hover:-translate-y-[2px]">
				Send Request — Free Quote →
			</button>
		</form>
	);
}