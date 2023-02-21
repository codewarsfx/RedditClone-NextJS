import { auth } from "@/firebase/app";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
	const [user, loading, error] = useAuthState(auth);

	return (
		<Flex bg='white' padding='6px 12px' height='44px' align='center'>
			<Flex>
				<Image src='/images/redditFace.svg' width='35px' />
				<Image
					src='/images/redditText.svg'
					width='50px'
					display={{ base: "none", md: "unset" }}
				/>
			</Flex>
			<SearchInput />
			<RightContent user={user} />
		</Flex>
	);
};
export default Navbar;
