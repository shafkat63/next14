// // normal method
// import { type NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
// 	const requestHeaders = new Headers(request.headers);
// 	console.log(requestHeaders.get("Authorization"));
// 	return new Response("Profile API data");
// }

import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
export async function GET(request: NextRequest) {
	const requestHeaders = new Headers(request.headers);
	const theme = request.cookies.get("theme");
	cookies().set("resultsPerPage", "20");
	const headerList = headers();
	console.log(requestHeaders.get("Authorization"));
	console.log(headerList.get("Authorization"));
	console.log(cookies().get("resultsPerPage"));

	return new Response("<h1>Profile API data</h1>", {
		headers: {
			"Content-Type": "text/html",
			"Set-Cookie": "theme=dark",
		},
	});
}
