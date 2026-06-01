export default function ContactInfo({t}) {
	return (
		<div className="contact-info relative z-[1] opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">

			<div className="section-tag font-secondary font-bold text-[0.65rem] tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-6 before:h-[3px] before:bg-green">
				{t.intro}
			</div>

			<h2 className="contact-info-title font-secondary font-extrabold text-[clamp(2.4rem,4vw,3.6rem)] uppercase leading-none text-white mb-4">
				{t.title.part1}<br />
				<span className="text-green">{t.title.part2}</span> {t.title.part3}
			</h2>

			<p className="contact-info-sub text-[0.95rem] text-white/45 leading-[1.8] mb-12 max-w-[360px]">
				{t.description}
			</p>

			<div className="contact-items flex flex-col gap-6">
				{
					t.contact.map((item, i) => (
						<div key={i} className="contact-item flex items-start gap-4">
							<div className="contact-item-icon w-[42px] h-[42px] bg-green/10 border border-green/30 flex items-center justify-center shrink-0">
								{item.icon}
							</div>

							<div>
								<div className="contact-item-label font-secondary text-[0.6rem] font-bold tracking-[0.25em] uppercase text-green mb-1">
									{item.title}
								</div>
								{
									item.isLink ?
										<div className="contact-item-val font-secondary text-base font-semibold text-white tracking-[0.04em]">
											<a
												href={item.ref}
												className="text-white no-underline transition-colors duration-200 hover:text-green"
											>
												{item.description}
											</a>
										</div>
										:
										<div className="contact-item-val font-secondary text-base font-semibold text-white tracking-[0.04em]">
											{item.description}
										</div>

								}


							</div>
						</div>
					))
				}
			</div>

		</div>
	);
}