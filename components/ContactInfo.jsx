export default function ContactInfo() {
	return (
		<div className="contact-info relative z-[1] opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">

			<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green">
				Get In Touch
			</div>

			<h2 className="contact-info-title font-secondary font-extrabold text-[clamp(2.4rem,4vw,3.6rem)] uppercase leading-none text-white mb-4">
				REQUEST YOUR<br />
				<span className="text-green">FREE</span> QUOTE
			</h2>

			<p className="contact-info-sub text-[0.95rem] text-white/45 leading-[1.8] mb-12 max-w-[360px]">
				Free site assessment, clear pricing within 24 hours, and no obligation.
				Fill out the form and we&apos;ll be in touch by the next business day.
			</p>

			<div className="contact-items flex flex-col gap-6">

				<div className="contact-item flex items-start gap-4">
					<div className="contact-item-icon w-[42px] h-[42px] bg-green/10 border border-green/30 flex items-center justify-center shrink-0">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path
								d="M3 3H7L9 7L7 8.5C8 10.5 9.5 12 11.5 13L13 11L17 13V17C17 17 15 18 13 17C7 15 3 11 3 5C2 3 3 3 3 3Z"
								stroke="#6abf1e"
								strokeWidth="1.6"
								strokeLinejoin="round"
							/>
						</svg>
					</div>

					<div>
						<div className="contact-item-label font-secondary text-[0.6rem] font-bold tracking-[0.25em] uppercase text-green mb-1">
							Phone
						</div>

						<div className="contact-item-val font-secondary text-base font-semibold text-white tracking-[0.04em]">
							<a
								href="tel:5145550199"
								className="text-white no-underline transition-colors duration-200 hover:text-green"
							>
								(514) 555-0199
							</a>
						</div>
					</div>
				</div>

				<div className="contact-item flex items-start gap-4">
					<div className="contact-item-icon w-[42px] h-[42px] bg-green/10 border border-green/30 flex items-center justify-center shrink-0">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
							<rect
								x="2"
								y="4"
								width="14"
								height="10"
								rx="1"
								stroke="#6abf1e"
								strokeWidth="1.6"
							/>

							<path
								d="M2 5L9 10L16 5"
								stroke="#6abf1e"
								strokeWidth="1.6"
								strokeLinecap="round"
							/>
						</svg>
					</div>

					<div>
						<div className="contact-item-label font-secondary text-[0.6rem] font-bold tracking-[0.25em] uppercase text-green mb-1">
							Email
						</div>

						<div className="contact-item-val font-secondary text-base font-semibold text-white tracking-[0.04em]">
							<a
								href="mailto:info@cleanedge.ca"
								className="text-white no-underline transition-colors duration-200 hover:text-green"
							>
								info@cleanedge.ca
							</a>
						</div>
					</div>
				</div>

				<div className="contact-item flex items-start gap-4">
					<div className="contact-item-icon w-[42px] h-[42px] bg-green/10 border border-green/30 flex items-center justify-center shrink-0">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
							<path
								d="M9 2C6 2 3.5 4.5 3.5 7.5C3.5 11.5 9 16 9 16C9 16 14.5 11.5 14.5 7.5C14.5 4.5 12 2 9 2Z"
								stroke="#6abf1e"
								strokeWidth="1.6"
							/>

							<circle
								cx="9"
								cy="7.5"
								r="2"
								stroke="#6abf1e"
								strokeWidth="1.4"
							/>
						</svg>
					</div>

					<div>
						<div className="contact-item-label font-secondary text-[0.6rem] font-bold tracking-[0.25em] uppercase text-green mb-1">
							Service Area
						</div>

						<div className="contact-item-val font-secondary text-base font-semibold text-white tracking-[0.04em]">
							Greater Montréal, QC
						</div>
					</div>
				</div>

				<div className="contact-item flex items-start gap-4">
					<div className="contact-item-icon w-[42px] h-[42px] bg-green/10 border border-green/30 flex items-center justify-center shrink-0">
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none">
							<circle
								cx="9"
								cy="9"
								r="7"
								stroke="#6abf1e"
								strokeWidth="1.6"
							/>

							<path
								d="M9 5V9L12 11"
								stroke="#6abf1e"
								strokeWidth="1.6"
								strokeLinecap="round"
							/>
						</svg>
					</div>

					<div>
						<div className="contact-item-label font-secondary text-[0.6rem] font-bold tracking-[0.25em] uppercase text-green mb-1">
							Hours
						</div>

						<div className="contact-item-val font-secondary text-base font-semibold text-white tracking-[0.04em]">
							Mon–Fri 8am–6pm · 24/7 Emergency
						</div>
					</div>
				</div>

			</div>

		</div>
	);
}