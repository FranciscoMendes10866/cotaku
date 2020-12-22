import { Flex, Box, Badge } from '@chakra-ui/react'

const PopoverBodyDetail = ({ detail }) => {
    return (
        <>
            <Flex
                justifyContent="space-between"
                align="center"
            >
                <Box>
                    Season: {detail.season}
                </Box>
                <Box>
                    Duration: {detail.duration} min
                        </Box>
            </Flex>
            <Flex
                justifyContent="space-between"
                align="center"
                mt={2}
            >
                <Box>
                    Gender:&nbsp;
                            <Badge
                        bg="blue.300"
                        color="white"
                    >
                        {detail.gender}
                    </Badge>
                </Box>
                <Box>
                    Status:&nbsp;
                            {detail.status === 'Airing' ? (
                        <Badge
                            bg="green.300"
                            color="white"
                        >
                            Airing
                        </Badge>
                    ) : (
                            <Badge
                                bg="orange.300"
                                color="white"
                            >
                                Finished
                            </Badge>
                        )}
                </Box>
            </Flex>
        </>
    )
}

export default PopoverBodyDetail
