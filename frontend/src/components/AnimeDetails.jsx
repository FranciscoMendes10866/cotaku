import {
    Flex,
    Box,
    Stack,
    Badge,
} from "@chakra-ui/react"

const AnimeDetails = ({ details }) => {
    return (
        <Flex
            justifyContent="left"
            align="left"
            flexDirection="column"
            pl={5}
            py={5}
        >
            <Stack spacing={4}>
                <Box>
                    Status:<br />
                    {details.status === 'Airing' ? (
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
                <Box>
                    Format:<br />{details.format}
                </Box>
                <Box>
                    Duration:<br />{details.duration} min
                </Box>
                <Box>
                    Season:<br />{details.season}
                </Box>
                <Box>
                    Source:<br />{details.source}
                </Box>
                <Box>
                    Gender:<br />
                    <Badge
                        bg="blue.300"
                        color="white"
                    >
                        {details.gender}
                    </Badge>
                </Box>
            </Stack>
        </Flex>
    )
}

export default AnimeDetails
