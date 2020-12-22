import { Box, Flex, Avatar, Badge, Text } from '@chakra-ui/react'

const ReviewDetail = ({ review }) => {
    return (
        <Box p="6" borderWidth="1px" borderRadius={8} mt={4} mb={4}>
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
            <Text mt={6} fontSize="lg" fontWeight="regular" lineHeight="short">
                {review.content}
            </Text>
        </Box>
    )
}

export default ReviewDetail
