import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

type SearchInputProps = {
	// user
};

const SearchInput: React.FC<SearchInputProps> = () => {
	return (
		<Flex flexGrow={1} mx={2}>
			<InputGroup>
				<InputLeftElement
					pointerEvents='none'
					children={<SearchIcon mb={1} color='gray.400' />}
				/>
                <Input placeholder='Search posts'
                    fontSize='10pt'
                    bg='gray.50'
                    _placeholder={{
                        color:'gray.500'
                    }}
                    height='34px'
                    _hover={{
                        border: '1px solid',
                        borderColor:'blue.500'
                    }}
                    _focus={{
                        outline: 'none',
                        border: '1px solid',
                        borderColor:'blue.500'
                    }}
                
                />
			</InputGroup>
		</Flex>
	);
};
export default SearchInput;
