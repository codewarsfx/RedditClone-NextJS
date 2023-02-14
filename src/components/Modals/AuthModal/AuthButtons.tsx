import { Button, Image } from '@chakra-ui/react';
import React from 'react';



const AuthButtons:React.FC = () => {
    
    return (
        <Button variant='oauth' width='100%' >
            <Image src='images/googlelogo.png' alt='google logo' height='20px' mr='4'/>
            Get started with Google
        </Button>
    )
}
export default AuthButtons;