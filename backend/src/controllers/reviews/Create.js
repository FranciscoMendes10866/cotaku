import prisma from '../../utils/PrismaClient'

const Create = async (req, res) => {
    const { id } = req.params
    const { content } = req.body

    await prisma.review.create({
        data: {
            content,
            User: { connect: { id: req.userId } },
            Anime: { connect: { id: id } }
        }
    })

    return res.json({ success: 'Review created with success.' })
}

export default Create
