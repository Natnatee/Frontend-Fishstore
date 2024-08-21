import Cart from "@/components/Cart";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
	return (
		<>
			<Navbar />
			<Cart />
			<section className="bg-gray-500  flex flex-col items-center mt-10">
				<div className="bg-red-400 h-80 text-center w-[980px] flex">
					<div className="bg-slate-300 w-1/3">Image</div>
					<div className="bg-lime-500 flex-grow">Shop</div>
				</div>
				<div className="bg-orange-400 h-[600px] text-center w-[980px]">
					Body
				</div>
			</section>
		</>
	);
}

export default page;
