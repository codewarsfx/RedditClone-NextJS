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
} from "@chakra-ui/react";
import React from "react";
import { useRecoilState } from "recoil";

type authModalProps = {};

const AuthModal: React.FC = () => {
	const [openModal, setOpenModal] = useRecoilState(AuthModalState);

	const handleClose = () => {
		setOpenModal((prev) => ({
			...prev,
			open: false,
		}));
	};

	return (
		<>
			<Modal isOpen={openModal.open} onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>hey there</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={handleClose}>
							Close
						</Button>
						<Button variant='ghost'>Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AuthModal;
