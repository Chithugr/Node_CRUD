import express from 'express'; // Use 'import' for express
import * as PostController from '../controller/postController';

const router = express.Router(); // Use 'express.Router()' to create a router instance

router.get('/', PostController.getAllPosts);
router.get('/:id', PostController.getPostById);
router.post('/', PostController.createPost);
router.put('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);
router.get('/latest', PostController.getLatestPosts);

export default router;
