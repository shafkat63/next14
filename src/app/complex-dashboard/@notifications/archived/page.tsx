import Card from "@/components/card";
import Link from "next/link";
const ArchivedNotifications = () => {
	return (
		<Card>
			<div className="flex flex-col">
				<h1>Archived Notifications</h1>
                <Link href="/complex-dashboard">Default</Link>
			</div>
			
		</Card>
	);
};

export default ArchivedNotifications;
