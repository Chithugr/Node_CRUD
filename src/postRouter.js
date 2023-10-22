const express = require('express')
const router = express(); // Use 'express.Router()' to create a router instance
const {
    getPostById,
    getAllPosts,
    createPost,
    updatePost,
    deletePost,
    getLatestPosts,
} = require('./postController');

router.get('/', async (req, res) => {
    try {
        const result = await getAllPosts();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
router.get('/:postId', async (req, res) => {
    try {
        const { postId } = req.params;
        console.log(postId);
        const result = await getPostById({ postId });
        res.status(200).send(result);
    } catch (error) {

        console.error(error);
        res.status(500).send(error);
        // throw error;
    }
});
router.post('/', async (req, res) => {
    try {
        const { title, content, categoryId } = req.body;
        const result = await createPost({ title, content, categoryId })
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    try {

        const { title, content, categoryId } = req.body;
        const { id } = req.params;
        const result = await updatePost({ postId: id, title, content, categoryId })
        res.status(204).send(result);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
router.delete('/:postId', async (req, res) => {
    try {

        const result = await deletePost({ postId });
        res.status(200).send(result);

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
router.get('/latest', async (req, res) => {
    try {
        const result = "";
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;
