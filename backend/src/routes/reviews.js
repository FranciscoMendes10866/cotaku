import { Router } from 'express'

import { CreateReview, DeleteReview, UpdateReview } from '../controllers'
import Authorization from '../guards/Authorization'

const router = new Router()

router.post('/:id', Authorization, CreateReview)
router.delete('/:id', Authorization, DeleteReview)
router.patch('/:id', Authorization, UpdateReview)

export default router
