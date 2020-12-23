import { Flex, Box, Input, Stack, Heading, Button } from '@chakra-ui/react'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

import { useStore } from '../store'
import axios from '../utils/axios'

const Home = () => {
    const { setToken, setUsername, setCurrentUserId } = useStore()
    const history = useHistory()
    const [state, setState] = useState({
        username: '',
        email: '',
        password: ''
    })
    const handleOnChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('auth/sign_up', state)
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
            username: '',
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
                            Welcome to Cotaku
                        </Heading>
                        <Stack spacing={8} mt={12}>
                            <Input
                                value={state.username}
                                variant="filled"
                                onChange={handleOnChange}
                                id="username"
                                placeholder="Username"
                                size="lg"
                            />
                            <Input
                                value={state.email}
                                variant="filled"
                                onChange={handleOnChange}
                                id="email"
                                placeholder="Email
                                address"
                                size="lg"
                            />
                            <Input
                                value={state.password}
                                variant="filled"
                                onChange={handleOnChange}
                                id="password"
                                placeholder="Password"
                                size="lg"
                            />
                            <Button
                                colorScheme="blue"
                                onClick={handleSubmit}
                            >
                                Sign Up
                            </Button>
                            <Button
                                as={Link}
                                to="/sign-in"
                                colorScheme="blue"
                                variant="ghost"
                            >
                                Sign In
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
                background="url(https://bit.ly/2KAuObT)"
                backgroundSize="cover"
                backgroundPosition="center"
                position="relative"
            />
        </Flex>
    )
}

export default Home
