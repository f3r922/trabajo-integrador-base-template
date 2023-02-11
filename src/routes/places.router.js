const express = require('express');
const router = express.Router();
const {     
    getPlacesController,
    getPlaceController,
    postPlaceController,
    patchPlaceController,
    deletePlaceController,
    getPlacesCategoriesController
    } 
    = require( '../controllers/places/places.controller.js')






router.get('/', getPlacesController)
router.get('/:id', getPlaceController)
router.post('/',postPlaceController)
router.patch('/:id', patchPlaceController)
router.delete('/:id', deletePlaceController)
router.get('/categoria/:category', getPlacesCategoriesController)

module.exports = router;
