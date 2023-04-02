const {Router} = require('express');
const postController = require('../controllers/postController');
const postRouter = Router();

postRouter.post('/:userId', postController.createPost);
postRouter.get('/', postController.getAllPost);
postRouter.get('/:postId', postController.getOnePost);
postRouter.put('/:postId', postController.updateOnePost);
postRouter.delete('/:postId', postController.deleteOnePost);

module.exports = postRouter;