require('dotenv').config()
const { MONGO_USER, MONGO_PASSWORD, MONGO_DATABASE } = process.env

module.exports = {
	database: {
		mongodb: {
			connectionString: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0.x97n0la.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`
		}
	}	
}
