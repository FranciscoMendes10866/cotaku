import { Box, Image, Text } from '@chakra-ui/react'

import { ModalDialog } from '.'

const CardInfo = ({ info, currentUserId }) => {
    return (
        <>
            <Box
                display="flex"
                borderWidth={1}
                shadow="lg"
                w={186}
                h={268}
                borderRadius={8}
                justifyContent="center"
                position="relative"
            >
                <Image w="full" borderRadius={8} src={info.profile} />
                <ModalDialog
                    anime={info}
                    currentUserId={currentUserId}
                />
            </Box>
            <Text
                textAlign="left"
                alignSelf="flex-end"
                mt={2}
            >
                {info.name.length >= 30 ? (
                    info.name.substring(0, 30) + "..."
                ) : (
                        info.name
                    )}
            </Text>
        </>
    )
}

export default CardInfo
