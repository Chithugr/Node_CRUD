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

router.get('/all', async (req, res) => {
    try {
        const result = await getAllPosts();
        return result;


    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const result = await getPostById({ id });
        return result;
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
        return result;
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
router.put('/:id', async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
router.delete('/:id', async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});
router.get('/latest', async (req, res) => {
    try {

    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

module.exports = router;
