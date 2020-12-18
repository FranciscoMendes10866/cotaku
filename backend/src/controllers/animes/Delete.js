import prisma from '../../utils/PrismaClient'

const Delete = async (req, res) => {
    if (!req.isAdmin) {
        return res.json({ error: 'You do not have admin rights to perform this operation.' })
    }

    const { id } = req.params

    await prisma.anime.delete({
        where: {
            id
        }
    })

    return res.json({ success: 'Anime deleted with success.' })
}

export default Delete
