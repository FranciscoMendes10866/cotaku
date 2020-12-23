import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input
} from "@chakra-ui/react"
import { BiPencil } from 'react-icons/bi'

const DrawerUpdateReview = ({ review }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button
                onClick={onOpen}
                variant="ghost"
                size="sm"
                color="blue.300"
            >
                <BiPencil />
            </Button>
            <Drawer
                zIndex="9999"
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Create your account</DrawerHeader>

                        <DrawerBody>
                            <Input value={review.content} />
                        </DrawerBody>

                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="blue">Save</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}

export default DrawerUpdateReview
