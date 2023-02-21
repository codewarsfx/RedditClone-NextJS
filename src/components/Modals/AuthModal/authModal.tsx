import { AuthModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/app";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	useDisclosure,
    Flex,
    Text
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import AuthButtons from "./AuthButtons";
import AuthInput from "./AuthInput";

type authModalProps = {};

const AuthModal: React.FC = () => {
	const [modal, setOpenModal] = useRecoilState(AuthModalState);
	const [user, loading, error] = useAuthState(auth);

	const handleClose = () => {
		setOpenModal((prev) => ({
			...prev,
			open: false,
		}));
	};

	useEffect(() => {
		handleClose()
	},[user])

	return (
		<>
			<Modal isOpen={modal.open} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent pb='4'>
					<ModalHeader textAlign='center'>
						{modal.view === "login" && "Log In"}
						{modal.view === "signup" && "Sign Up"}
						{modal.view === "resetpassword" && "Reset Password"}
					</ModalHeader>
					<ModalCloseButton />
                    <ModalBody display='flex' alignItems='center' justifyContent='center' width='100%' mt={4}>
                        <Flex align='center' direction='column' justify='center' width='70%'>
                            <AuthButtons />
                            <Text my='3' fontWeight={700} textColor='gray.500'> OR </Text>
                            <AuthInput/>
                        </Flex>
                    </ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AuthModal;
