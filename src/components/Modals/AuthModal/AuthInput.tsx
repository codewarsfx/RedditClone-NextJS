import { AuthModalState } from "@/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import Login from "./Login";
import Reset from "./Reset";

import Signup from "./Signup";

const AuthInput: React.FC = () => {
	const [modalState] = useRecoilState(AuthModalState);
	return (
		<>
			{modalState.view === "login" || modalState.view === "signup" ? (
				<>
					{modalState.view === "login" && <Login />}
					{modalState.view === "signup" && <Signup />}
				</>
			) : (
				<Reset/>
			)}
		</>
	);
};
export default AuthInput;
