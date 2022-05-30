import React, { SyntheticEvent, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Navigate } from 'react-router-dom';

import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    InputGroup,

} from '@chakra-ui/react'

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('https://movieapp-sep6.azurewebsites.net/api/user/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username,
                emailAddress,
                password
            })
        });
        setNavigate(true);

    }
    if (navigate) {
        return <Navigate to="/login" />;
    }

    return (

        <form onSubmit={submit}>
            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">

                    <Stack spacing="6">
                        <div className="image-container">
                            <img src="https://img.icons8.com/fluency/96/000000/disney-1.png" />
                        </div>


                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading>
                                Create new account
                            </Heading>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">Already have an account?</Text>
                                <Button variant="link" colorScheme="blue" onClick={event => window.location.href = '/login'}>

                                    Login
                                </Button>
                            </HStack>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >

                        <Stack spacing="6">
                            <Stack spacing="5">
                                
                                <FormControl>
                                    <FormLabel htmlFor="username">Username</FormLabel>
                                    <Input id="username" type="username" onChange={e => setUsername(e.target.value)} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" onChange={e => setEmail(e.target.value)} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <InputGroup>
                                        <Input id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                </FormControl>
                            </Stack>
                            <HStack justify="space-between">

                            </HStack>
                            <Stack spacing="6">
                                <Button variant="primary" type='submit'  >Create </Button>



                                <HStack>
                                    <Divider />

                                    <Divider />
                                </HStack>

                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </form>

    );
};
export default Register;