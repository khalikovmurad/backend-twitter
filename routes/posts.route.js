const { Router } = require('express')
const { postsController } = require('../controllers/posts.controller')
const { post } = require('./users.route')
const router = Router()

router.get('/posts', postsController.getPosts)
router.get('/posts/:id', postsController.getPost)
router.post('/posts', postsController.createPost)
router.delete('/posts/:id', postsController.deletePosts)
router.patch('/posts/:id', postsController.patchPost)

module.exports = router