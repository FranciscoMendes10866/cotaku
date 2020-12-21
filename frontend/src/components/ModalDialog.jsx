import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Grid,
    GridItem,
    Image,
    Flex,
    Box,
    Stack,
    Container,
    Badge,
    Text
} from "@chakra-ui/react"
import { BsFillEyeFill } from 'react-icons/bs'

const ModalDialog = ({ anime }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                onClick={onOpen}
                alignSelf="flex-end"
                top={0}
                right={0}
                position="absolute"
                size="xs"
                mt={2}
                mr={2}
            >
                <BsFillEyeFill />
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="full">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{anime.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Container maxW="6xl">
                            <Grid
                                h={400}
                                templateRows="repeat(2, 1fr)"
                                templateColumns="repeat(12, 1fr)"
                                gap={4}
                            >
                                <GridItem
                                    colSpan={12}
                                    bg="tomato"
                                    borderRadius={8}
                                >
                                    <Image
                                        borderRadius={8}
                                        w="full"
                                        maxH={200}
                                        src={anime.cover}
                                        objectFit="cover"
                                        objectPosition="top"
                                    />
                                </GridItem>
                                <GridItem
                                    colSpan={2}
                                    bg="gray.100"
                                    borderRadius={8}
                                >
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
                                            <Box>
                                                Format:<br />{anime.format}
                                            </Box>
                                            <Box>
                                                Duration:<br />{anime.duration}
                                            </Box>
                                            <Box>
                                                Season:<br />{anime.season}
                                            </Box>
                                            <Box>
                                                Source:<br />{anime.source}
                                            </Box>
                                            <Box>
                                                Gender:<br />{anime.gender}
                                            </Box>
                                        </Stack>
                                    </Flex>
                                </GridItem>
                                <GridItem colSpan={10}>
                                    <Box
                                        px={5}
                                        py={5}
                                        borderRadius={8}
                                        bg="gray.100"
                                    >
                                        <Text>{anime.synopsis}</Text>
                                    </Box>
                                </GridItem>
                            </Grid>
                        </Container>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalDialog
