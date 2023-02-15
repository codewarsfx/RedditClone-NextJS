import { AuthModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/app";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { FIREBASE_ERRORS } from "@/firebase/firestoreErrors";

const Signup: React.FC = () => {
	const setAuthModalState = useSetRecoilState(AuthModalState);
	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	})
	const [errors, setErrors] = useState('')

    const [
        createUserWithEmailAndPassword,
        _,
        loading,
        autherror,
      ] = useCreateUserWithEmailAndPassword(auth);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setErrors('')
		
		if (inputValue.password !== inputValue.confirmPassword) {
			return setErrors ('passwords do not match')
			
		}

	createUserWithEmailAndPassword(inputValue.email, inputValue.password)

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
			<Input
				name='confirmPassword'
				required
				type='password'
				placeholder='confirm password'
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
				value={inputValue.confirmPassword}
			/>
			<Text color='red.500' textAlign='center' my='2' fontSize='9pt'>
				{errors || FIREBASE_ERRORS[autherror?.message as keyof typeof FIREBASE_ERRORS] }
			</Text>
			<Button mb='3' mt={2} width='100%' height='36px' type='submit' isLoading={loading}>
				{" "}
				Log in
			</Button>
			<Flex justifyContent='center' fontSize='9pt'>
				<Text mr={2}>Already a Redditor?</Text>
				<Text
					fontWeight={700}
					color='blue.500'
					cursor='pointer'
					onClick={() =>
						setAuthModalState((prev) => ({
							...prev,
							view: "login",
						}))
					}
				>
					LOG IN
				</Text>
			</Flex>
		</form>
	);
};
export default Signup;
