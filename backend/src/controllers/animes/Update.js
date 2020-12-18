import prisma from '../../utils/PrismaClient'

const Update = async (req, res) => {
    if (!req.isAdmin) {
        return res.json({ error: 'You do not have admin rights to perform this operation.' })
    }

    const { id } = req.params
    const { profile, cover, name, synopsis, status, format, duration, season, source, gender } = req.body

    await prisma.anime.update({
        where: {
            id
        },
        data: {
            profile,
            cover,
            name,
            synopsis,
            status,
            format,
            duration,
            season,
            source,
            gender
        }
    })

    return res.json({ success: 'Anime updated with success.' })
}

export default Update
