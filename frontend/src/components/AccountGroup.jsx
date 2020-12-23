import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { HiLogout } from 'react-icons/hi'

const AccountGroup = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            <ButtonGroup
                isAttached
                borderRadius={0}
                alignSelf="flex-end"
                top={0}
                right={0}
                position="absolute"
                variant="ghost"
            >
                <Button isDisabled>
                    franciscomendes97
                </Button>
                <Button>
                    <HiLogout />&nbsp;
                Log Out
                </Button>
            </ButtonGroup>
        </Box>
    )
}

export default AccountGroup
