const { v4: uuidv4 } = require('uuid');
const Post = require('./db/models/post');



async function getPostById({ id }) {
    const post = await Post.findById(id);
    return post;
}

const getAllPosts = async () => {
    // Retrieve all posts from the database and send the response
    return await Post.findAll();
}

async function createPost({ title, content, categoryId }) {
    const newPost = new Post({
        id: uuidv4(),
        title: title,
        content: content,
        categoryId: categoryId
    })

    return await newPost.save(newPost);

}

async function updatePost() {


    return null;

}

async function deletePost() {


    return null;

}

async function getLatestPosts() {


    return null;

}
// Implement similar functions for other CRUD operations

module.exports = {
    getPostById,
    getAllPosts,
    createPost,
    updatePost,
    deletePost,
    getLatestPosts,
}
