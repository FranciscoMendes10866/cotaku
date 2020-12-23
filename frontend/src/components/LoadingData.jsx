import { CircularProgress, Flex, Box } from "@chakra-ui/react"

const LoadingData = () => {
    return (
        <Flex
            justifyContent="center"
            align="center"
            h="100vh"
        >
            <Box>
                <CircularProgress isIndeterminate color="blue.400" />
            </Box>
        </Flex>
    )
}

export default LoadingData
