import { Metadata } from "next";

type Props = {
	params: {
		productid: string;
	};
};
export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`OnePlus ${params.productid}`);
		}, 100);
	});
	return {
		title: `Product ${title }`,
	};
};

const ProductDetails = ({ params }: Props) => {
	return <h1>Product Details about {params.productid}</h1>;
};

export default ProductDetails;
