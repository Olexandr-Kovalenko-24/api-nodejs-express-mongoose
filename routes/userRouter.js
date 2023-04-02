const {Router} = require('express');
const userController = require('../controllers/userController');
const userRouter = Router();

userRouter.post('/', userController.createUser);
userRouter.get('/', userController.getAll);
userRouter.get('/:userId', userController.getOne);
userRouter.put('/:userId', userController.updateOne);
userRouter.delete('/:userId', userController.deleteOne);

module.exports = userRouter;