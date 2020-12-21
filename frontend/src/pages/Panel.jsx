import { SimpleGrid, Container } from "@chakra-ui/react"

import { Card } from '../components'

const Panel = () => {
    const data = [
        {
            "id": "3f5c414e-546c-40b4-8d8d-a7606777ccaf",
            "profile": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110277-Yxit7fu0jYOJ.png",
            "cover": "https://hdqwalls.com/wallpapers/attack-on-titan-2-a2.jpg",
            "name": "Shingeki no Kyojin: The Final Season",
            "synopsis": "It’s been four years since the Scout Regiment reached the shoreline, and the world looks different now. Things are heating up as the fate of the Scout Regiment—and the people of Paradis—are determined at last. However, Eren is missing. Will he reappear before age-old tensions between Marleyans and Eldians result in the war of all wars?",
            "status": "Airing",
            "format": "TV",
            "duration": 23,
            "season": "Fall",
            "source": "Manga",
            "gender": "Action",
            "Review": [
                {
                    "id": "a9b7364e-a06b-4986-8715-251493858d50",
                    "content": "One of the best animes ever.",
                    "User": {
                        "id": "58b59678-9f5d-418b-8fdc-20332073d077",
                        "username": "franciscomendes97",
                        "is_online": true
                    }
                }
            ]
        },
        {
            "id": "214357bf-f097-4d24-8eed-8bcaf574638d",
            "profile": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108632-Z8LOaPpYPK93.jpg",
            "cover": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1860708.png&f=1&nofb=1",
            "name": "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season ",
            "synopsis": "Even after dying countless times, Subaru finally ended the threat of the White Whale and defeated the Witch Cult's Sin Archbishop representing sloth, Petelgeuse Romaneeconti. But only shortly after overcoming a tragic ending and reuniting with his beloved Emilia, Subaru learns that Rem has been erased from this world, having fallen victim to the White Whale's Fog of Elimination in the midst of Subaru's death loop. With the White Whale now gone, Subaru and Emilia are forced to confront a reality they never dreamed would happen.",
            "status": "Finished",
            "format": "TV",
            "duration": 23,
            "season": "Summer",
            "source": "Light Novel",
            "gender": "Adventure",
            "Review": []
        },
        {
            "id": "a7c6302f-1791-4a8f-8875-4e72b22be29a",
            "profile": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114236-lSQF4ljWQXdU.jpg",
            "cover": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4592969.jpg&f=1&nofb=1",
            "name": "Enen no Shouboutai: Ni no Shou ",
            "synopsis": "Shinra and Company 8 have figured out the Evangelist’s goal: to gather Adolla Bursts from Shinra and Shou. After learning more about his past from Captain Burns, Shinra becomes more motivated to discover the truth about his mother and save Shou again. But a mysterious girl known as the “First Pillar” reveals the Evangelist’s master plan to start another Great Cataclysm!",
            "status": "Finished",
            "format": "TV",
            "duration": 24,
            "season": "Summer",
            "source": "Manga",
            "gender": "Action",
            "Review": []
        }
    ]

    return (
        <Container maxWidth="5xl" py={12}>
            <SimpleGrid columns={5} spacing={10}>
                {data.map(anime => {
                    return <Card key={anime.id} anime={anime} />
                })}
            </SimpleGrid>
        </Container>
    )
}

export default Panel
