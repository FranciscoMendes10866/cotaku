import { Flex, Box, Input, Stack, Heading, Button } from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

import { useStore } from '../store'
import axios from '../utils/axios'

const SignIn = () => {
    const history = useHistory()
    const { setToken, setUsername, setCurrentUserId } = useStore()
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const handleOnChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await axios.post('auth/sign_in', state)
            .then(({ data }) => {
                if (data.token) {
                    setToken(data.token)
                    setUsername(data.username)
                    setCurrentUserId(data.id)
                    history.push('/panel')
                }
            })
            .catch(err => console.log(err))
        setState({
            email: '',
            password: ''
        })
    }
    return (
        <Flex>
            <Box
                width={{ base: "100vw", md: "40vw" }}
                background="yellow"
                height="100vh"
            >
                <Flex
                    justifyContent="center"
                    height="100vh"
                    align="center"
                >
                    <Box>
                        <Heading
                            as="h2"
                            size="xl"
                            isTruncated
                            fontWeight="bold"
                            textAlign="center"
                        >
                            Login
                        </Heading>
                        <Stack spacing={8} mt={12}>
                            <Input
                                id="email"
                                value={state.email}
                                onChange={handleOnChange}
                                variant="filled"
                                placeholder="Email
                                address"
                                size="lg"
                            />
                            <Input
                                id="password"
                                value={state.password}
                                onChange={handleOnChange}
                                variant="filled"
                                placeholder="Password"
                                size="lg"
                            />
                            <Button
                                colorScheme="blue"
                                onClick={handleOnSubmit}
                            >
                                Sign In
                            </Button>
                            <Button
                                as={Link}
                                to="/"
                                colorScheme="blue"
                                variant="ghost"
                            >
                                Sign Up
                            </Button>
                        </Stack>
                    </Box>
                </Flex>
            </Box>
            <Box
                width={{ base: "0vw", md: "60vw" }}
                height="100vh"
                display={{ base: "none", md: "block" }}
                backgroundRepeat="no-repeat"
                background="url(https://bit.ly/2WJchfX)"
                backgroundSize="cover"
                backgroundPosition="center"
                position="relative"
            />
        </Flex>
    )
}

export default SignIn
