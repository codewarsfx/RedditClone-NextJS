import { AuthModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/app";
import { FIREBASE_ERRORS } from "@/firebase/firestoreErrors";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";

const Login: React.FC = () => {
	const setAuthModalState = useSetRecoilState(AuthModalState);
	const [
		signInWithEmailAndPassword,
		user,
		loading,
		error,
	] = useSignInWithEmailAndPassword(auth);
	
	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};
//j
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		signInWithEmailAndPassword(inputValue.email, inputValue.password)


	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				name='email'
				required
				type='email'
				placeholder='email'
				fontSize='10pt'
				bg='gray.50'
				_placeholder={{
					color: "gray.500",
				}}
				mb='2'
				height='34px'
				_hover={{
					border: "1px solid",
					borderColor: "blue.500",
				}}
				_focus={{
					outline: "none",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				onChange={handleChange}
				value={inputValue.email}
			/>
			<Input
				name='password'
				required
				type='password'
				placeholder='password '
				fontSize='10pt'
				bg='gray.50'
				_placeholder={{
					color: "gray.500",
				}}
				mb='2'
				height='34px'
				_hover={{
					bg: "white",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				_focus={{
					outline: "none",
					border: "1px solid",
					borderColor: "blue.500",
				}}
				onChange={handleChange}
				value={inputValue.password}
			/>
			<Text color='red.500' textAlign='center' my='2' fontSize='9pt'>
				{error && FIREBASE_ERRORS[error.message as  keyof typeof FIREBASE_ERRORS]}
			</Text>
			<Button mb='3' mt={2} width='100%' height='36px' type='submit' isLoading={loading}>
				{" "}
				Log in
			</Button>
			<Flex justifyContent='center' fontSize='9pt'>
				<Text mr={2}>New here?</Text>
				<Text
					fontWeight={700}
					color='blue.500'
					cursor='pointer'
					onClick={() => {
						setAuthModalState((prev) => ({ ...prev, view: "signup" }));
					}}
				>
					SIGN UP
				</Text>
			</Flex>
		</form>
	);
};
export default Login;
