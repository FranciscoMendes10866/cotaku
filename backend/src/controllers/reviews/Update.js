import prisma from '../../utils/PrismaClient'

const Update = async (req, res) => {
    const { id } = req.params
    const { content } = req.body

    const review = await prisma.review.findFirst({
        where: {
            id
        },
        select: {
            user_id: true
        }
    })

    if (review.user_id !== req.userId) {
        return res.json({ error: 'You do not have permission to update this review.' })
    }

    await prisma.review.update({
        where: {
            id
        },
        data: {
            content
        }
    })

    return res.json({ success: 'Review updated with success.' })
}

export default Update
