import News from '../models/news';
import NewsService from '../services/news';

//GET
export const getAllArticles = async (req, res, next) => {
  try {
    const result = await NewsService.findAllArticles();
    return res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getOneArticle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await NewsService.findOneArticle(id);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

//POST
export const createArticle = async (req, res, next) => {
  try {
    const { title, body } = req.body;

    const article = new News({ title, body });
    const result = await NewsService.createArticle(article);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};

//UPDATE
export const updateArticle = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await NewsService.updateArticle(data);
    return res.json(result);
  } catch (error) {
    next(error);
  }
};
