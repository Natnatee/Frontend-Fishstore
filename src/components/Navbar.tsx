"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	return (
		<nav className="fixed top-0 left-0 w-full bg-blue-500 z-50">
			<ul className="flex justify-between px-5">
				<ul className="flex gap-7 h-10 items-center">
					<li>
						<Link href="/">Home</Link>
					</li>
				</ul>
				<ul className="flex gap-7 h-10 items-center">
					<li>
						<Link href="/buy_fish">Buy</Link>
					</li>
					<li className="relative">
						<button
							onClick={toggleDropdown}
							className="flex items-center focus:outline-none"
						>
							Menu
							<svg
								className={`ml-2 w-4 h-4 transition-transform transform ${
									isDropdownOpen ? "rotate-90" : "rotate-0"
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</button>
						<div
							className={`absolute top-full mt-2 w-32 bg-sky-400 shadow-lg border border-gray-200 overflow-hidden transition-all duration-700 ${
								isDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
							}`}
						>
							<ul className="flex flex-col">
								<li className="hover:bg-gray-100">
									<Link href="/profile" className="block px-4 py-2">
										Profile
									</Link>
								</li>
								<li className="hover:bg-gray-100">
									<Link href="/about" className="block px-4 py-2">
										About
									</Link>
								</li>
							</ul>
						</div>
					</li>
					<li>
						<Link href="/login">Login</Link>
					</li>
				</ul>
			</ul>
		</nav>
	);
};

export default Navbar;
