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
    Box,
    Container,
    Text,
    useColorModeValue
} from "@chakra-ui/react"
import { BsFillEyeFill } from 'react-icons/bs'

import { AnimeDetails, Review, ReviewsModal } from '.'

const ModalDialog = ({ anime }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const bgColor = useColorModeValue("gray.100", "gray.800")
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
                                    bg={bgColor}
                                    borderRadius={8}
                                >
                                    <AnimeDetails details={anime} />
                                </GridItem>
                                <GridItem colSpan={10}>
                                    <Box
                                        px={5}
                                        py={5}
                                        borderRadius={8}
                                        bg={bgColor}
                                    >
                                        <Text>{anime.synopsis}</Text>
                                    </Box>
                                    <Review
                                        animeId={anime.id}
                                        bgColor={bgColor}
                                    />
                                    <ReviewsModal
                                        reviews={anime.Review}
                                        animeName={anime.name}
                                    />
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
