"use client";
import React, { useEffect, useRef } from "react";
import styles from "../../styles/reveal.module.css"; // Correct import

const BackgroundReveal: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const overlayRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (containerRef.current && overlayRef.current) {
				const rect = containerRef.current.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				overlayRef.current.style.setProperty("--x", `${x}px`);
				overlayRef.current.style.setProperty("--y", `${y}px`);
			}
		};

		const container = containerRef.current;
		container?.addEventListener("mousemove", handleMouseMove);

		return () => {
			container?.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className={styles.backgroundContainer} ref={containerRef}>
			ร้านขายปลาสวยงาม
			<div className={styles.overlay} ref={overlayRef}></div>
		</div>
	);
};

export default BackgroundReveal;
