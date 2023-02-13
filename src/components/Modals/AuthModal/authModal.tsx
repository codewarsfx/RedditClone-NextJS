import { AuthModalState } from "@/atoms/authModalAtom";
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
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";
import AuthButtons from "./AuthButtons";
import AuthInput from "./AuthInput";

type authModalProps = {};

const AuthModal: React.FC = () => {
	const [modal, setOpenModal] = useRecoilState(AuthModalState);

	const handleClose = () => {
		setOpenModal((prev) => ({
			...prev,
			open: false,
		}));
	};

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
                            <AuthInput/>
                        </Flex>
                        
                    </ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AuthModal;
