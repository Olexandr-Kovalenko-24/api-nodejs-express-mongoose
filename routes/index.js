const {Router} = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const commentRouter = require('./commentRouter');

const apiRouter = Router();
apiRouter.use('/users', userRouter);
apiRouter.use('/posts', postRouter);
apiRouter.use('/comments', commentRouter);

module.exports = apiRouter;