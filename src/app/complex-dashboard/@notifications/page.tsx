import Card from "@/components/card";
import Link from "next/link";
const Notifications = () => {
	return (
		<Card>
			<div className="flex flex-col">
				<h1> Notifications</h1>
				<Link href="/complex-dashboard/archived">Archived</Link>
			</div>
		</Card>
	);
};

export default Notifications;
