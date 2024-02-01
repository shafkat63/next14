import { Metadata } from "next";
export const metadata: Metadata = {
	title: {
		absolute: "Blog",
	},
};
const Blog = () => {
	let sum = 0;
	for (let i = 1000000000; i >= 1; i--) {
		sum = sum + i;
	}

	return (
		<div>
			<h2>My Blog</h2>
		</div>
	);
};

export default Blog;
