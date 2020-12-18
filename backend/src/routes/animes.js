import { Router } from 'express'

import { CreateAnime, DeleteAnime, FindAnimes, UpdateAnime } from '../controllers'
import Authorization from '../guards/Authorization'

const router = new Router()

router.post('/', Authorization, CreateAnime)
router.get('/', Authorization, FindAnimes)
router.delete('/:id', Authorization, DeleteAnime)
router.patch('/:id', Authorization, UpdateAnime)

export default router
