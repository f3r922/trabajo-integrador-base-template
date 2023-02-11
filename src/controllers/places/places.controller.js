const PlacesService = require('../../services/places.service.js')

async function getPlacesController(req, res, next) {
    try {
        const places = await PlacesService.getPlaces()
        res.json(places)
    } catch (error){
        next(error)
    }
}

async function getPlacesCategoriesController(req, res, next){
    try{
        const {category} = req.params
        console.log(category)
        const placescategories = await PlacesService.getPlacesCategories(category)
        res.json(placescategories)
    }catch (error){
        next(error)
    }
}


async function getPlaceController(req, res, next){
    try {
        const {id} = req.params
        console.log(id)
        const lugar = await PlacesService.getPlace(id)
        console.log(lugar)
        res.json(lugar)
    } catch (error) {
        next(error)
    }
}

async function postPlaceController(req, res, next) {
    try {
        //const data = req.body
        const image = req.file
        const data = req.body
        console.log(image)
        console.log(data)
        const place = await PlacesService.savePlace(data, image)
        console.log(place)
        res.json(place)
    } catch(error){
        next(error)
    }
}

async function patchPlaceController(req, res, next){
    try{
        const {id} = req.params
        const data = req.body
        const place = await PlacesService.updatePlace(id, data)
        res.json(place)
    } catch(error){
        next(error)
    }
}

async function deletePlaceController(req, res, next){
    try{
        const {id} = req.params
        const place = await PlacesService.deletePlace(id)
        res.json(place)
    } catch(error){
        next(error)
    }
}

module.exports = {
    getPlacesController,
    getPlacesCategoriesController,
    getPlaceController,
    postPlaceController,
    patchPlaceController,
    deletePlaceController
}
