import { auth } from "@/firebase/app";
import { Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const AuthButtons: React.FC = () => {
	const [signInWithGoogle, _, loading, autherror] =
        useSignInWithGoogle(auth);
    
    const handleClick = () => {
        signInWithGoogle()
    }

	return (
		<>
			<Button onClick={()=>handleClick()} variant='oauth' width='100%' isLoading={loading}>
				<Image
					src='images/googlelogo.png'
					alt='google logo'
					height='20px'
					mr='4'
				/>
				Get started with Google
			</Button>
			{autherror && (
				<Text fontSize='10pt' mt='1' color='red'>
					{autherror.message}
				</Text>
			)}
		</>
	);
};
export default AuthButtons;
