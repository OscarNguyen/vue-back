import News from '../models/news';

const createArticle = (article) => {
  return article.save();
};

const findAllArticles = () => {
  return News.find({}).exec();
};

const findOneArticle = (id) => {
  return News.findById(id).exec();
};

const updateArticle = (update) => {
  const opts = { runValidators: true, new: true, context: 'query' };

  return News.findByIdAndUpdate(update.id, { body: update.body, title: update.title }, opts).exec();
};

export default { createArticle, findAllArticles, findOneArticle, updateArticle };
