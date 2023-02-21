import { auth } from "@/firebase/app";
import { Button, Flex } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import React from "react";
import AuthModal from "../../Modals/AuthModal/authModal";
import AuthButtons from "./AuthButtons";
import ActionIcons from "./Icons";
import Menuwrapper from "./Menuwrapper/Menuwrapper";

type RightContentProps = {
	user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
	return (
		<>
			<AuthModal />
			<Flex justify='center' align='center'>
			   {user ? <ActionIcons /> : <AuthButtons />}
       		   <Menuwrapper />
			</Flex>
		</>
	);
};
export default RightContent;
