const {Router} = require('express');
const commentController = require('../controllers/commentController');
const commentRouter = Router();

commentRouter.post('/:postId/:userId', commentController.createComment);
commentRouter.get('/', commentController.getAllComment);
commentRouter.get('/:commentId', commentController.getOneComment);
commentRouter.put('/:commentId', commentController.updateOneComment);
commentRouter.delete('/:commentId', commentController.deleteOneComment);

module.exports = commentRouter;