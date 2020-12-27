import {
    Box,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    useColorModeValue
} from "@chakra-ui/react"

import { PopoverBodyDetail, CardInfo } from "."

const Card = ({ anime, refetch }) => {
    const bgColor = useColorModeValue("white", "gray.800")
    const fontColor = useColorModeValue("blue.500", "white")
    return (
        <Popover
            placement="bottom"
            trigger="hover"
            size="xs"
        >
            <PopoverTrigger>
                <Box>
                    <CardInfo
                        info={anime}
                        refetch={refetch}
                    />
                </Box>
            </PopoverTrigger>
            <PopoverContent
                bg={bgColor}
                color={fontColor}
            >
                <PopoverBody py={4}>
                    <PopoverBodyDetail detail={anime} />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default Card
