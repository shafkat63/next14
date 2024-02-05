import Link from "next/link";

const F4 = () => {
	return (
		<>
			<h1>F4 Page</h1>
			<div>
				<Link href="f3">F3</Link>
                <Link href="/about">About</Link>

            </div>
		</>
	);
};

export default F4;
