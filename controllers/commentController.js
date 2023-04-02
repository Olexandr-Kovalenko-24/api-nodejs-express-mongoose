const {Comment} = require('../models');

module.exports.createComment = async (req, res, next) => {
    try {
        const {body, params: {postId, userId}} = req;
        console.log(body)
        const createdComment = await Comment.create({...body, author: userId, post: postId});
        res.status(201).send(createdComment);
    } catch (error) {
        next(error)
    }
}

module.exports.getAllComment = async (req, res, next) => {
    try {
        const allComments = await Comment.find().populate("author");
        res.status(200).send(allComments);
    } catch (error) {
        next(error)
    }
}

module.exports.getOneComment = async (req, res, next) => {
    try {
        const {params: {commentId}} = req;
        const oneComment = await Comment.findById(commentId).populate("author");
        res.status(200).send(oneComment);
    } catch (error) {
        next(error)
    }
}

module.exports.updateOneComment = async (req, res, next) => {
    try {
        const {params: {CommentId}, body} = req;
        const oneComment = await Comment.findByIdAndUpdate(CommentId, {...body}, {returnDocument: 'after'});
        res.status(200).send(oneComment);
    } catch (error) {
        next(error)
    }
}

module.exports.deleteOneComment = async (req, res, next) => {
    try {
        const {params: {CommentId}} = req;
        await Comment.findByIdAndDelete(CommentId);
        res.status(204).send('Comment successfully deleted');
    } catch (error) {
        next(error)
    }
}