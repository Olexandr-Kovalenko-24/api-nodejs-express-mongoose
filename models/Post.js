const mongoose = require('mongoose');
const {Schema} = mongoose;

const postSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;