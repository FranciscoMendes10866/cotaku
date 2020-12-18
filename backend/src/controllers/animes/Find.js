import prisma from '../../utils/PrismaClient'

const Find = async (req, res) => {
    const list = await prisma.anime.findMany({
        select: {
            id: true,
            profile: true,
            cover: true,
            name: true,
            synopsis: true,
            status: true,
            format: true,
            duration: true,
            season: true,
            source: true,
            gender: true,
            Review: {
                select: {
                    id: true,
                    content: true,
                    User: {
                        select: {
                            id: true,
                            username: true,
                            is_online: true,
                        }
                    }
                }
            }
        }
    })
    return res.json(list)
}

export default Find
