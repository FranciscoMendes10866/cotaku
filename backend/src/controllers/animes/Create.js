import prisma from '../../utils/PrismaClient'

const Create = async (req, res) => {
    if (!req.isAdmin) {
        return res.json({ error: 'You do not have admin rights to perform this operation.' })
    }
    
    const { profile, cover, name, synopsis, status, format, duration, season, source, gender } = req.body

    await prisma.anime.create({
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
            gender,
            User: { connect: { id: req.userId } }
        }
    })

    return res.json({ success: 'Anime created with success.' })
}

export default Create
