import Link from "next/link";

const Products = () => {
	const productId = 100;
	return (
		<div className="flex flex-col justify-center	items-center">
			<h1>Product list</h1>
			<h3>
				{" "}
				<Link href="/products/1">Product 1</Link>{" "}
			</h3>
			<h3>
				{" "}
				<Link href="/products/2">Product 2</Link>{" "}
			</h3>
			<h3>
				{" "}
				<Link href="/products/3">Product 3</Link>{" "}
			</h3>
			<h3>
				{" "}
				<Link href="/products/4">Product 4</Link>{" "}
			</h3>
			<h3>
				{" "}
				<Link href="/products/5">Product 5</Link>{" "}
			</h3>
			<h3>
				{" "}
				<Link href="/products/6">Product 6</Link>{" "}
			</h3>
			<h3>
				{" "}
				<Link href="/products/7">Product 7</Link>{" "}
			</h3>
			<h3>
				{" "}
				<Link href="/products/8">Product 8</Link>{" "}
			</h3>
		
			<h3>
				{" "}
				<Link href="/products/9" replace>
					Product 9 || It will clear the link
				</Link>{" "}
			</h3>
			<h3>
				{" "}
				<Link href={`/products/${productId}`}>Product {productId} </Link>{" "}
			</h3>
		</div>
	);
};

export default Products;
