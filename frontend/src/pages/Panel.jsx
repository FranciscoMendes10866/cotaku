import { SimpleGrid, Container } from "@chakra-ui/react"

import { Card } from '../components'
import { useStore } from '../store'

import dummydb from '../dummydb.json'

const Panel = () => {
    const currentUserId = useStore(state => state.currentUserId)
    const data = dummydb
    return (
        <Container maxWidth="5xl" py={12}>
            <SimpleGrid
                columns={4}
                spacing={10}
                py={10}
            >
                {data.data.map(anime => {
                    return <Card
                        key={anime.id}
                        anime={anime}
                    />
                })}
            </SimpleGrid>
        </Container>
    )
}

export default Panel
