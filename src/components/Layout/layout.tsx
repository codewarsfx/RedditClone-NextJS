import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";

type layoutProps = {};

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar/>
			<main>{children}</main>
		</>
	);
};
export default Layout;


