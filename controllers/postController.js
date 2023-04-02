const {Post} = require('../models');

module.exports.createPost = async (req, res, next) => {
    try {
        const {body, params: {userId}} = req;
        const createdPost = await Post.create({...body, author: userId});
        res.status(201).send(createdPost);
    } catch (error) {
        next(error)
    }
}

module.exports.getAllPost = async (req, res, next) => {
    try {
        const allPosts = await Post.find().populate('author');
        res.status(200).send(allPosts);
    } catch (error) {
        next(error)
    }
}

module.exports.getOnePost = async (req, res, next) => {
    try {
        const {params: {postId}} = req;
        const onePost = await Post.findById(postId).populate("author").populate("comment");
        res.status(200).send(onePost);
    } catch (error) {
        next(error)
    }
}

module.exports.updateOnePost = async (req, res, next) => {
    try {
        const {params: {postId}, body} = req;
        const onePost = await Post.findByIdAndUpdate(postId, {...body}, {returnDocument: 'after'});
        res.status(200).send(onePost);
    } catch (error) {
        next(error)
    }
}

module.exports.deleteOnePost = async (req, res, next) => {
    try {
        const {params: {postId}} = req;
        await Post.findByIdAndDelete(postId);
        res.status(204).send('Post successfully deleted');
    } catch (error) {
        next(error)
    }
}