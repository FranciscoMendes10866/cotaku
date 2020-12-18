import prisma from '../../utils/PrismaClient'

const Delete = async (req, res) => {
    const { id } = req.params

    const review = await prisma.review.findFirst({
        where: {
            id
        },
        select: {
            user_id: true
        }
    })
    
    if (review.user_id !== req.userId) {
        return res.json({ error: 'You do not have permission to delete this review.' })
    }

    await prisma.review.delete({
        where: {
            id
        }
    })

    return res.json({ success: 'Review deleted with success.' })
}

export default Delete
