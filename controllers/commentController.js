const {Comment} = require('../models');

module.exports.createComment = async (req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const createdComment = await Comment.create({...body, author: userId});
        res.status(201).send(createdComment);
    } catch (error) {
        next(error)
    }
}

module.exports.getAllComment = async (req, res, next) => {
    try {
        const allComments = await Comment.find().populate('author');
        res.status(200).send(allComments);
    } catch (error) {
        next(error)
    }
}

module.exports.getOneComment = async (req, res, next) => {
    try {
        const {params: {CommentId}} = req;
        const oneComment = await Comment.findById(CommentId).populate("author");
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