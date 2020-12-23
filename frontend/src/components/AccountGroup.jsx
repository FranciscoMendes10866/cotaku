import { Box, Button, ButtonGroup } from '@chakra-ui/react'
import { HiLogout } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'

import { useStore } from '../store'
import axios from '../utils/axios'

const AccountGroup = () => {
    const stateToken = useStore(state => state.token)
    const stateUsername = useStore(state => state.username)
    const { setToken, setUsername, setCurrentUserId } = useStore()
    const history = useHistory()
    const handleSignOut = async (e) => {
        e.preventDefault()
        await axios.patch('auth/sign_out', {}, {
            headers: {
                authorization: `Bearer ${stateToken}`
            }
        })
            .then(({ data }) => {
                if (data.success) {
                    setToken('')
                    setUsername('')
                    setCurrentUserId('')
                    history.push('/sign-in')
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            { stateToken !== '' && (
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
                            {stateUsername}
                        </Button>
                        <Button onClick={handleSignOut}>
                            <HiLogout />&nbsp;
                            Log Out
                        </Button>
                    </ButtonGroup>
                </Box>
            )}
        </>
    )
}

export default AccountGroup
