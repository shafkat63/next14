// import React from "react";
// import Users from "./@users/page";
// import Revenue from "./@revenue/page";
// import Notifications from "./@notifications/page";

const DashboardLayout = ({
	children,
	users,
	revenue,
	notifications,
}: {
	children: React.ReactNode;
	users: React.ReactNode;
	revenue: React.ReactNode;
	notifications: React.ReactNode;
}) => {
	return (
		<div>
			<div>{children} </div>
			<div style={{ display: "flex" }}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div>{users} </div>
					<div>{revenue} </div>
				</div>
				<div style={{ display: "flex", flex: 1 }}>{notifications} </div>
			</div>
		</div>
	);
};

export default DashboardLayout;
