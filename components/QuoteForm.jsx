"use client";

import { useState } from "react";

export default function QuoteForm({t}) {
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
		// setSuccess(true);
	}

	const inputClass = "form-input w-full bg-white/[0.04] border border-white/10 text-white text-[0.9rem] px-4 py-3.5 outline-none transition-[border-color,background] duration-200 focus:border-green focus:bg-green/5 placeholder:text-white/20";
	const labelClass = "form-label font-secondary text-[0.6rem] font-bold tracking-[0.25em] uppercase text-gray";

	if (success) {
		return (
			<div className="form-success relative z-[1] text-center p-8 bg-green/10 border border-green/30 opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
				<div className="form-success-icon text-[2.5rem] mb-3">✅</div>
				<div className="form-success-msg font-secondary font-bold text-[1.1rem] uppercase tracking-[0.1em] text-green">
					{t.form.success.message1}
				</div>
				<div className="form-success-sub text-[0.85rem] text-white/40 mt-2">
					{t.form.success.message2}
				</div>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="contact-form relative z-[1] opacity-0 animate-[fadeUp_0.6s_0.25s_forwards]">
			<div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div className="form-group flex flex-col gap-2">
					<label className={labelClass}>
						{t.form.f_name.label}
					</label>
					<input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder={t.form.f_name.placeholder} required className={inputClass} />
				</div>

				<div className="form-group flex flex-col gap-2">
					<label className={labelClass}>{t.form.l_name.label}</label>
					<input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder={t.form.l_name.placeholder}  required className={inputClass} />
				</div>
			</div>

			<div className="form-row grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
				<div className="form-group flex flex-col gap-2">
					<label className={labelClass}>{t.form.email.label}</label>
					<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t.form.email.placeholder} required className={inputClass} />
				</div>

				<div className="form-group flex flex-col gap-2">
					<label className={labelClass}>{t.form.phone.label}</label>
					<input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t.form.phone.placeholder} required className={inputClass} />
				</div>
			</div>

			<div className="form-group flex flex-col gap-2 mb-4">
				<label className={labelClass}>{t.form.company.label}</label>
				<input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t.form.company.placeholder} className={inputClass} />
			</div>

			<div className="form-group flex flex-col gap-2 mb-4">
				<label className={labelClass}>{t.form.services.label}</label>
				<select name="service" value={formData.service} onChange={handleChange} required className={`${inputClass} form-select cursor-pointer appearance-none pr-10`}>
					<option value="" disabled>{t.form.services.placeholder}</option>
					{
						t.form.services.content.map((item, i) => (
							<option key={i} value={item}>{item}</option>
						))
					}
				</select>
			</div>

			<div className="form-group flex flex-col gap-2">
				<label className={labelClass}>{t.form.message.label}</label>
				<textarea name="message" value={formData.message} onChange={handleChange} placeholder={t.form.message.placeholder} required className={`${inputClass} form-textarea min-h-[120px] resize-y`} />
			</div>

			<button type="submit" className="form-submit w-full mt-6 bg-green text-navy font-secondary font-extrabold text-[0.8rem] tracking-[0.25em] uppercase px-8 py-4 border-0 cursor-pointer [clip-path:polygon(0_0,calc(100%_-_10px)_0,100%_100%,10px_100%)] transition-all duration-200 hover:bg-[#7ed622] hover:-translate-y-[2px]">
				{t.form.button} →
			</button>
		</form>
	);
}