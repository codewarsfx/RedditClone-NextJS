import { Flex, Image } from '@chakra-ui/react';
import React from 'react';


const Navbar:React.FC = () => {
    
    return (
        <Flex bg='white' padding='6px 12px' height='44px'>
            <Flex>
            <Image src='/images/redditFace.svg' width='30px'/>
            <Image src='/images/redditText.svg' width='46px' display={{base:'none',md:'unset'}}/>
            </Flex>

        </Flex>
    )
}
export default Navbar;