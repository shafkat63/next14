// export const metadata = {
// 	title: "Next.js",
// 	description: "Generated by Next.js",
// };

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
        <h2>Inner Layout</h2>
			{children}
			
		</>
	);
}
