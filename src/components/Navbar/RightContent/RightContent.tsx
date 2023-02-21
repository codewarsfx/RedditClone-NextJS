import { auth } from "@/firebase/app";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthModal from "../../Modals/AuthModal/authModal";
import AuthButtons from "./AuthButtons";

type RightContentProps = {
	user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
	return (
		<>
			<AuthModal />
			<Flex justify='center' align='center'>
				{user ? (
					<Button onClick={() => signOut(auth)}>Log out</Button>
				) : (
					<AuthButtons />
				)}
			</Flex>
		</>
	);
};
export default RightContent;
