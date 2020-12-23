import { SimpleGrid, Container } from "@chakra-ui/react"

import { Card } from '../components'

import dummydb from '../dummydb.json'

const Panel = () => {
    const currentUserId = "58b59678-9f5d-418b-8fdc-20332073d077"
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
                        currentUserId={currentUserId}
                    />
                })}
            </SimpleGrid>
        </Container>
    )
}

export default Panel
