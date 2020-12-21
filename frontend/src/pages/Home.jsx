import { Flex, Box, Input, Stack, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Home = () => {
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
                                variant="filled"
                                placeholder="Username"
                                size="lg"
                            />
                            <Input
                                variant="filled"
                                placeholder="Email
                                address"
                                size="lg"
                            />
                            <Input
                                variant="filled"
                                placeholder="Password"
                                size="lg"
                            />
                            <Button colorScheme="blue">Sign Up</Button>
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
                background="url(https://i.pinimg.com/originals/5a/c3/3b/5ac33bb8dcaf7c29dc5d8ec5e61e9432.jpg)"
                backgroundSize="cover"
                backgroundPosition="center"
                position="relative"
            />
        </Flex>
    )
}

export default Home
