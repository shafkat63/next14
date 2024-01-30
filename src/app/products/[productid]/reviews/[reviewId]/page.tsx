import { notFound } from "next/navigation";
const ReviewId = ({
	params,
}: {
	params: {
		reviewId: string;
		productid: string;
	};
}) => {
	if (parseInt(params.reviewId) > 1000) {
		notFound();
	}
	return (
		<h1>
			Review Id is {params.reviewId} and Product id is {params.productid}
		</h1>
	);
};

export default ReviewId;
