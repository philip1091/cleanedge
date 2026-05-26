import { MdRequestQuote } from "react-icons/md";
const Topbar = () => {
	return (
		<div className="bg-green h-8 text-center ">
			<div className="container mx-auto h-full flex items-center justify-center">
				<div className="flex items-center gap-2">
					<MdRequestQuote className="text-navy" />
					<p className="bold text-navy">Get quotes within 3 hours!</p>
				</div>
			</div>
		</div>
	)
}
export default Topbar
