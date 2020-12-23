import { CircularProgress, Flex, Box, Alert, AlertIcon } from "@chakra-ui/react"

const LoadingData = ({ isError }) => {
    return (
        <Flex
            justifyContent="center"
            align="center"
            h="100vh"
        >
            <Box>
                {isError ? (
                    <Alert status="error">
                        <AlertIcon />
                            There was an error processing your request.
                    </Alert>

                ) : (
                        <CircularProgress isIndeterminate color="blue.400" />
                    )}
            </Box>
        </Flex>
    )
}

export default LoadingData
