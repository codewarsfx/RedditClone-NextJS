import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
	return (
		<Flex bg='white' padding='6px 12px' height='44px'>
			<Flex>
				<Image src='/images/redditFace.svg' width='35px' />
				<Image
					src='/images/redditText.svg'
					width='50px'
					display={{ base: "none", md: "unset" }}
				/>
            </Flex>
            <SearchInput/>
		</Flex>
	);
};
export default Navbar;
