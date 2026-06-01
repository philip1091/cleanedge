import React from 'react'

const IntroBanner = ({t}) => {

	return (
		<div className="services-strip bg-green flex flex-wrap justify-around overflow-hidden">

			{
				t.map((item, i) => (
					<div key={i} className="w-1/2 md:w-1/4 strip-item border-r border-black/10 border-b md:border-b-0 flex items-center gap-4 p-6 relative transition-colors duration-500 hover:bg-green-dark opacity-0 animate-[fadeUp_0.6s_0.1s_forwards]">
						{item.icon}
						<span className="font-secondary font-bold text-xs tracking-[0.2em] uppercase text-navy">
					        {item.title}
					    </span>
					</div>
				))
			}
		</div>
	)
}

export default IntroBanner