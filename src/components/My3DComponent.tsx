"use client";
import { Canvas } from "@react-three/fiber";
import { Box } from "@react-three/drei"; // Optional: For pre-built components like Box

export default function My3DComponent() {
	return (
		<Canvas>
			{/* Add your 3D components here */}
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box>
				<meshStandardMaterial attach="material" color="red" />
			</Box>
		</Canvas>
	);
}
