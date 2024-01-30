const ProductDetails = ({
	params,
}: {
	params: {
		productid: string;
	};
}) => {
	return <h1>Product Details about {params.productid}</h1>;
};

export default ProductDetails;
