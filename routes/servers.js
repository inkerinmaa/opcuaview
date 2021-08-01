import {Router} from 'express'
import {getAlldata} from '../controllers/controllers.js'
const router = Router()

router.get('/api/server', getAlldata)

// router.post('/api/server', create)

// router.delete('/api/server/:id', remove)

export default router