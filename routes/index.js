const {Router} = require('express');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');

const apiRouter = Router();
apiRouter.use('/users', userRouter);
apiRouter.use('/posts', postRouter);

module.exports = apiRouter;