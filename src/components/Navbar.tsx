import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 w-full bg-blue-500 z-50">
			<ul className="flex justify-evenly h-10 items-center">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/login">login</Link>
				</li>
				<li>
					<Link href="/buy_fish">Buy Fish</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
