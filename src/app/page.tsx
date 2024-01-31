import Link from "next/link";

const Home = () => {
	return (
		<div className="">
			<h1>Home page</h1>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					color: "green",
					paddingBottom: "1rem",
					margin: "1rem",
				}}
			>
				{" "}
				<Link
					href="/blog"
					
				>
					Blog
				</Link>
				<Link href="/products">Products</Link>
				<Link href="/about">About</Link>
				<Link style={{
						color: "green",
					}} href="/dashboard">Dashboard</Link>
			</div>
		</div>
	);
};

export default Home;
