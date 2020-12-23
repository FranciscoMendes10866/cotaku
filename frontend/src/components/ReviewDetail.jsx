import { Box, Flex, Avatar, Badge, Text, Button } from '@chakra-ui/react'
import { RiDeleteBin7Line } from 'react-icons/ri'

import { EditableReview } from '.'
import { useStore } from '../store'

const ReviewDetail = ({ review }) => {
    const currentUserId = useStore(state => state.currentUserId)
    return (
        <Box p="6" borderWidth="1px" borderRadius={8} mt={4} mb={4}>
            <Flex justifyContent="space-between">
                <Flex>
                    <Avatar size="md" src="" />
                    <Box ml="3">
                        <Text fontWeight="bold">
                            {review.User.username}
                        </Text>
                        <Text fontSize="sm">
                            {review.User.isOnline ? (
                                <Badge ml="1" colorScheme="green">
                                    Online
                                </Badge>
                            ) : (
                                    <Badge ml="1">
                                        Offline
                                    </Badge>
                                )}
                        </Text>
                    </Box>
                </Flex>
                {currentUserId === review.User.id && (
                    <Flex>
                        <Button
                            variant="ghost"
                            size="sm"
                            colorScheme="pink"
                        >
                            <RiDeleteBin7Line />
                        </Button>
                    </Flex>
                )}
            </Flex>
            <Box mt={6} fontSize="lg" fontWeight="regular" lineHeight="short" >
                <EditableReview review={review} />
            </Box>
        </Box>
    )
}

export default ReviewDetail
