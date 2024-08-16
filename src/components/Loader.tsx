import React from "react";
import styles from "../styles/Loader.module.css";

const Loader: React.FC = () => {
	return (
		<div className={styles.load}>
			<hr />
			<hr />
			<hr />
			<hr />
		</div>
	);
};

export default Loader;
