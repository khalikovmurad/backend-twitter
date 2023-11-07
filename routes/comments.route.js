const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller.js')
const router = Router()

router.get('/comments', commentsController.getComments)
router.post('/comments', commentsController.createComments)
router.delete('/comments/:id', commentsController.deleteComments)
router.patch('/comments/:id', commentsController.patchComments)

module.exports = router