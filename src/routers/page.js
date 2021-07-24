import express from 'express'
import {getContent,postContent,updateContent} from '../controllers/page'
const router = express.Router()

router.get('/:type',getContent)
router.post('/create',postContent)
router.put('/update',updateContent)

export default router
