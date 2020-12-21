import {
    Box,
    Text,
    Image,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Flex,
    Badge
} from "@chakra-ui/react"

const Card = ({ anime }) => {
    return (
        <Popover
            placement="bottom"
            trigger="hover"
            size="xs"
        >
            <PopoverTrigger>
                <Box>
                    <Box
                        display="flex"
                        borderWidth={1}
                        shadow="lg"
                        w={186}
                        h={268}
                        borderRadius={8}
                        justifyContent="center"
                    >
                        <Image w="full" borderRadius={8} src={anime.profile} />
                    </Box>
                    <Text
                        textAlign="left"
                        alignSelf="flex-end"
                        mt={2}
                    >
                        {anime.name.length >= 30 ? (
                            anime.name.substring(0, 30) + "..."
                        ) : (
                                anime.name
                            )}
                    </Text>
                </Box>
            </PopoverTrigger>
            <PopoverContent
                bg="white"
                color="blue.400"
            >
                <PopoverBody py={4}>
                    <Flex
                        justifyContent="space-between"
                        align="center"
                    >
                        <Box>
                            Season: {anime.season}
                        </Box>
                        <Box>
                            Duration: {anime.duration} min
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
                                {anime.gender}
                            </Badge>
                        </Box>
                        <Box>
                            Status:&nbsp;
                            {anime.status === 'Airing' ? (
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
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default Card
