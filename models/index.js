const mongoose = require('mongoose');
const db = process.env.ENV_NODE || "development";
const CONFIG = require('../configs/db.json')[db];
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

mongoose.connect(`mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`)
.catch(error => {
    console.log(error);
    process.exit(1);
});

module.exports = {
    User, Post, Comment
};