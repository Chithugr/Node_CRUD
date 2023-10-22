const express = require('express')
const router = express.Router(); // Use 'express.Router()' to create a router instance

const PostController = require('../controller/postController.ts')

router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPostById);
router.post('/', PostController.createPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);
router.get('/latest', PostController.getLatestPosts);

module.exports = router;
