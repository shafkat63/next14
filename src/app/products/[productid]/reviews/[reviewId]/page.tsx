import React from "react";

const ReviewId = ({
	params,
}: {
	params: {
		reviewId: string;
		productid: string;
	};
}) => {
	return (
		<h1>
			Review Id is {params.reviewId} and Product id is {params.productid}
		</h1>
	);
};

export default ReviewId;
