"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
	{ name: "Register", href: "/register" },
	{ name: "Login", href: "/login" },
	{ name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathName = usePathname();
	const [input, setInput] = useState("");
	return (
		<div>
			<div>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				/>
			</div>

			<div>
				{navLinks.map((link) => {
					const isActive = pathName.startsWith(link.href);
					return (
						<Link
							href={link.href}
							key={link.name}
							className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
						>
							{link.name}
						</Link>
					);
				})}
				{children}
			</div>
		</div>
	);
}
