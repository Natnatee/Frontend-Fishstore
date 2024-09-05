export const metadata = {
	title: "คนรักปลาสวยงาม",
};

import My3DComponent from "@/components/My3DComponent";
import Navbar from "@/components/Navbar";
import React from "react";

const Profile = () => {
	return (
		<div>
			<Navbar />
			<My3DComponent />
		</div>
	);
};

export default Profile;
