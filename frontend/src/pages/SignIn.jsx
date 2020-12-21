import { Flex, Box, Input, Stack, Heading, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const SignIn = () => {
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
                            <Button colorScheme="blue">Sign In</Button>
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
                background="url(https://i.pinimg.com/originals/67/0f/49/670f498d795fea0232874671cc479073.jpg)"
                backgroundSize="cover"
                backgroundPosition="center"
                position="relative"
            />
        </Flex>
    )
}

export default SignIn
