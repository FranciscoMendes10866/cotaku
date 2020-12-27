import { SimpleGrid, Container } from "@chakra-ui/react"
import { useQuery } from 'react-query'

import { Card, LoadingData } from '../components'
import { useStore } from '../store'
import { FindHandler } from '../handlers'

const Panel = () => {
    const stateToken = useStore(state => state.token)
    const {
        data,
        isError,
        isLoading,
        isFetching,
        refetch
    } = useQuery(['animes', { token: stateToken }], FindHandler)
    return (
        <Container maxWidth="5xl">
            {isLoading || isFetching ? (
                <LoadingData isError={isError} />
            ) : (
                    <SimpleGrid
                        columns={4}
                        spacing={10}
                        py={24}
                    >
                        {data.data.map(anime => {
                            return <Card
                                key={anime.id}
                                anime={anime}
                                refetch={refetch}
                            />
                        })}
                    </SimpleGrid>
                )}
        </Container>
    )
}

export default Panel
