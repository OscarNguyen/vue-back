import express from 'express';
import { createArticle, getAllArticles, getOneArticle, updateArticle } from '../controllers/news';

const router = express.Router();

router.get('/', getAllArticles);
router.get('/:id', getOneArticle);
router.post('/create', createArticle);
router.put('/update', updateArticle);
export default router;
