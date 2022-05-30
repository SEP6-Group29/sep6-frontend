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
  Spinner

} from '@chakra-ui/react'
import * as React from 'react'
import { SyntheticEvent } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from 'react';

import { Navigate } from 'react-router-dom';
import { AxiosError } from "axios";
import { error } from "console";
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { Form, Link } from 'react-bootstrap/lib/Navbar';
import MovieService from '../services/movie.service';


const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false);
  const [showError, setShowError] = useState(false);


  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const response = await fetch('https://movieapp-sep6.azurewebsites.net/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        username,
        password
      })


    });
    if ((response.status == 400) || (response.status == 401)) {
      setNavigate(false);
      setShowError(true);
      console.log("400 or 401" + username);

    }
    else {
      setNavigate(true);
      console.log("not 400 or 401" + username);

    }

  }


  if (navigate) {
    return <Navigate to="/watchlist" />; //change to top 8 movies
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
                Log in to your account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue" onClick={event => window.location.href = '/register'}>

                  Sign up
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
                {
                  showError ? (<Text style={{ color: "red" }}>Incorrect username or password! </Text>) : " "
                }
              </Stack>
              <HStack justify="space-between">

              </HStack>
              <Stack spacing="6">
                <Button variant="primary" type='submit'  >Sign in</Button>


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

export default Login;

