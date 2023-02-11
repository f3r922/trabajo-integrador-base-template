const {Place} = require('../models/places.model.js')

async function getPlaces(){
  try{
      const places = await Place.find({})
      return places
  } catch (error) {
      throw error
  }
}

async function getPlacesCategories(category){
  try{
      const placescategories = await Place.find({category: category})
      return placescategories
  } catch (error) {
      throw error
  }
}

async function getPlace(id){
  try {
      const place = await Place.findById(id)
      return place
  } catch(error){
      throw error
  }
}

async function savePlace(data, image){
  try{
      const place = new Place()
      place.name = data.name
      place.location = data.location
      place.latitude = data.latitude
      place.longitude = data.longitude
      place.description = data.description
      place.category = data.category
      place.acerca = data.acerca
      place.filename = image.filename
      place.path = '/img/uploads/' + image.filename
      
      return place.save()
  } catch (error){
      throw error
  }
}

async function updatePlace(id, data){
	try {
		const place = await Place.findById(id)
		Object.assign(place, data)
		return place.save()
	} catch (error) {
		throw error
	}
}

async function deletePlace(id){
  try{
      const place = await Place.findByIdAndDelete(id)
      return place
  } catch (error){
      throw error
  }
}

module.exports = { 
  getPlace, 
  getPlaces,
  getPlacesCategories,
  deletePlace, 
  savePlace, 
  updatePlace
}