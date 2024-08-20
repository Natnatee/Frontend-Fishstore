export const metadata = {
	title: "ปลาสวยงาม",
	description: "This is the home page description",
};

import BackgroundReveal from "@/components/home/ฺBackgroundReveal";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

const Home = () => {
	return (
		<div>
			<Navbar />
			<BackgroundReveal />
			<div className="px-5">
				{/* Home cards 1 */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10 pt-5">
					<div>
						<img
							src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRwoKbBcgD6Wif8cF2XCaBCXj5GGtw4vpHw&s"
							alt=""
							className="h-40 w-72 object-cover object-center mb-5"
						/>
						<h3 className="mb-1 text">กุ้งแคระ เรดบี ราคา 20 บาท !!</h3>
						<p></p>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
					<div>
						<img
							src="https://sncfishshop.com/wp-content/uploads/2023/05/NEW-COVER-75.jpg"
							alt=""
							className="h-40 w-72 object-cover object-center mb-5"
						/>
						<h3 className="mb-1">กุ้งแคระไฟร์เรด 10 บาท</h3>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
					<div>
						<img
							src="https://e.lnwfile.com/_/e/_raw/i2/y9/y3.jpg"
							alt=""
							className="h-40 w-72 object-cover object-center mb-5"
						/>
						<h3 className="mb-1">Java fern 150 บาท</h3>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
					<div>
						<img
							src="https://www.pcn.co.th/wp-content/uploads/2021/08/oct_5901.jpg"
							alt=""
							className="h-40 w-72 object-cover object-center mb-5"
						/>
						<h3 className="mb-1">อาหารปลา</h3>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
				</section>

				{/* Xbox */}
				<section className="w-full h-[500px] bg-cover bg-center mb-5 bg-[url('https://i.ytimg.com/vi/x3fNDn2jS9s/maxresdefault.jpg')]">
					<div className="content w-2/5 py-12 pl-7">
						<h2 className="mb-5">ซื้อ-ขาย ง่ายด้วย ScanQRcode</h2>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
				</section>

				{/* Home cards 2 */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
					<div>
						<img
							src="https://image.makewebcdn.com/makeweb/m_1920x0/SRYhm4eWP/FishEquipment/10092395_BAI_450_1.jpg"
							alt=""
							className="h-40 w-72 object-cover object-center mb-5"
						/>
						<h3 className="mb-1">ตู้ปลา 10นิ้ว 150 บาท</h3>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
					<div>
						<img
							src="https://img.lazcdn.com/g/p/e546f48a4f02a70703f0bc3fa67f4ab1.jpg_720x720q80.jpg"
							alt=""
							className="h-40 w-72 object-cover object-center mb-5"
						/>
						<h3 className="mb-1">ของตกแต่งตู้ปลา 30-150 บาท</h3>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
					<div>
						<img
							src="https://f.ptcdn.info/222/026/000/1417706539-Demasoni00-o.jpg"
							alt=""
							className="h-40 w-72 object-cover object-center mb-5"
						/>
						<h3 className="mb-1">ปลามาลาวี 10บาท</h3>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
					<div>
						<img
							src="https://sncfishshop.com/wp-content/uploads/2022/11/NEW-COVER-78.jpg"
							alt=""
							className="h-40 w-72 object-cover object-center mb-5"
						/>
						<h3 className="mb-1">ปลาหมอเทวดา 15 บาท</h3>
						<Link
							href="buy_fish"
							className="uppercase text-blue-600 font-bold pt-3 inline-block"
						>
							Shop Now
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
