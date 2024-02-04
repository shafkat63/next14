"use client";
import { notFound } from "next/navigation";

const getRandomInt = (count: number) => {
	return Math.floor(Math.random() * count);
};
const ReviewId = ({
	params,
}: {
	params: {
		reviewId: string;
		productid: string;
	};
}) => {
	// const random = getRandomInt(2);

	// if (random === 1) {
	// 	throw new Error("Error loading review");
	// }
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
