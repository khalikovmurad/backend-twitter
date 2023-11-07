const { Router } = require('express')
const { favoritesController } = require('../controllers/favorites.controller')
const router = Router()

router.get('/favorites', favoritesController.getFavorite)
router.post('/favorites', favoritesController.createFavorite)
router.delete('/favorites/:id', favoritesController.delereFavorite)

module.exports = router