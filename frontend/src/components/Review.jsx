import { Box, Textarea, Button, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { useMutation } from 'react-query'

import { useStore } from '../store'
import { CreateHandler } from '../handlers'

const Review = ({ animeId, bgColor, refetch }) => {
    const stateToken = useStore(state => state.token)
    const textAreaBgColor = useColorModeValue("white", "gray.700")
    const textAreaFontColor = useColorModeValue("gray.500", "gray.200")
    const [state, setState] = useState({
        content: ''
    })
    const { mutate } = useMutation(CreateHandler, {
        onSuccess: () => {
            refetch()
        }
    })
    const handleOnChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        mutate({
            id: animeId,
            body: state,
            token: stateToken
        })
        setState({
            content: ''
        })
    }
    return (
        <Box
            px={5}
            py={5}
            mt={4}
            borderRadius={8}
            bg={bgColor}
        >
            <Textarea
                name="content"
                bg={textAreaBgColor}
                borderRadius={8}
                color={textAreaFontColor}
                resize="none"
                placeholder="Write a review related to the featured anime."
                minH={100}
                onChange={handleOnChange}
            />
            <Button
                w="full"
                mt={4}
                bg="blue.400"
                color="white"
                onClick={handleSubmit}
            >
                Comment
            </Button>
        </Box>
    )
}

export default Review
