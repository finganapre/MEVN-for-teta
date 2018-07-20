module.exports = {
	port: process.env.PORT || 8081,
	dbURL: process.env.MONGODB_URL_NEWS || 'mongodb://localhost/articles',
	dbOptions: { useMongoClient: true }
}