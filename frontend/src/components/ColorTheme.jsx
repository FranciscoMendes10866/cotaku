import { useColorMode, Button, Box } from '@chakra-ui/react'
import { CgDarkMode } from 'react-icons/cg'

const ColorTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Box
            display="flex"
            justifyContent="center"
        >
            <Button
                onClick={toggleColorMode}
                borderRadius={0}
                alignSelf="flex-end"
                top={0}
                left={0}
                position="absolute"
                variant="ghost"
            >
                <CgDarkMode />&nbsp;
                {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
        </Box>
    )
}

export default ColorTheme
