const { v4: uuidv4 } = require('uuid');
const Post = require('../db/models/post');



async function getPostById({ postId }) {
    try {
        const post = await Post.findOne({ postId: postId });
        return post;
    } catch (error) {
        console.error('Error while finding post by ID:', error);
        throw error;
    }
}

const getAllPosts = async () => {
    try {
        return await Post.find({});
    } catch (error) {
        console.error('Error while getting all posts:', error);
        throw error;
    }
    // Retrieve all posts from the database and send the response
}

async function createPost({ title, content, categoryId }) {
    try {
        const newPost = new Post({
            postId: uuidv4(),
            title: title,
            content: content,
            categoryId: categoryId
        })

        return await newPost.save();
    } catch (error) {
        console.error('Error while creating post:', error);
        throw error;
    }
}

async function updatePost({ postId, title, content, categoryId }) {
    try {
        const dataToUpdate = {};
        if (title) {
            dataToUpdate.title = title;
        }
        if (content) {
            dataToUpdate.content = content;
        }
        if (categoryId) {
            dataToUpdate.categoryId = categoryId;
        }
        const updatePost = await Post.findOneAndUpdate({ postId }, dataToUpdate, { new: true });
        return updatePost;
    } catch (error) {
        console.error('Error while updating post:', error);
        throw error;
    }

}

async function deletePost({ postId }) {
    try {
        const result = await Post.deleteOne({ postId });
        return result;
    } catch (error) {
        console.error('Error while deleting post:', error);
        throw error;
    }
}

async function getLatestPosts() {
    try {
        return "";
    } catch (error) {
        console.error('Error while get Latest all posts:', error);
        throw error;
    }
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
