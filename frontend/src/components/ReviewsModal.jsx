import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
} from "@chakra-ui/react"
import { FaCommentAlt } from 'react-icons/fa'

import { ReviewDetail } from '.'

const ReviewsModal = ({ reviews, animeName, currentUserId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {reviews.length >= 1 ? (
                <>
                    <Button
                        onClick={onOpen}
                        bg="orange.300"
                        color="white"
                        w="full"
                        mt={4}
                    >
                        <FaCommentAlt />
                    </Button>
                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                        size="xl"
                        scrollBehavior="inside"
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>{animeName} &bull; Reviews</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                {reviews.map(review => {
                                    return <ReviewDetail
                                        key={review.id}
                                        review={review}
                                        currentUserId={currentUserId}
                                    />
                                })}
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                </>
            ) : (
                    <Button
                        isDisabled
                        bg="orange.300"
                        color="white"
                        w="full"
                        mt={4}
                    >
                        <FaCommentAlt />
                    </Button>
                )}
        </>
    )
}

export default ReviewsModal
