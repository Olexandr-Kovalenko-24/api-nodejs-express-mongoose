const {Router} = require('express');
const commentController = require('../controllers/commentController');
const commentRouter = Router();

commentRouter.post('/:postId', commentController.createPost);
commentRouter.get('/', commentController.getAllPost);
commentRouter.get('/:commentId', commentController.getOnePost);
commentRouter.put('/:commentId', commentController.updateOnePost);
commentRouter.delete('/:commentId', commentController.deleteOnePost);

module.exports = commentRouter;