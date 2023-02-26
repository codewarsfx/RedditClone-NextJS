import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from "@chakra-ui/react";
import React from "react";
import { TiHome } from "react-icons/ti";

type DirectoryProps = {};

const Directory: React.FC<DirectoryProps> = () => {
	return (
		<Menu>
			<MenuButton
				cursor='pointer'
				padding='0px 6px'
				borderRadius='4px'
				_hover={{ outline: "1px solid", outlineColor: "gray.200" }}
			>
				<Flex align ='center'>
					<Flex align='center'>
						<Icon fontSize={24} mr={{ base: 1, md: 2 }} as={TiHome} />
						<Flex display={{ base: "none", lg: "flex" }}>
							<Text fontSize='10pt' fontWeight={600}>
								Home
							</Text>
						</Flex>
					</Flex>
					<ChevronDownIcon color='gray.500' />
				</Flex>
			</MenuButton>
            <MenuList>
                <AddCommummnities/>
            </MenuList>
		</Menu>
	);
};
export default Directory;