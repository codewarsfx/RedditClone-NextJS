import { AuthModalState } from "@/atoms/authModalAtom";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useSetRecoilState } from "recoil";

const Signup: React.FC = () => {
	const setAuthModalState = useSetRecoilState(AuthModalState);
	const [inputValue, setInputValue] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {};

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
			<Button mb='3' mt={2} width='100%' height='36px' type='submit'>
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
