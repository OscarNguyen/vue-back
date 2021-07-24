import Page from '../models/page';

const findContent = (type) => {
  return Page.findOne({ type }).exec();
};

const createContent = (page) => {
  return page.save();
};

const updateContent = (update) => {
  const opts = { runValidators: true, new: true, context: 'query' };
  return Page.findOneAndUpdate({ type: update.type }, { content: update.content }, opts).exec();
};

export default { findContent, createContent, updateContent };
