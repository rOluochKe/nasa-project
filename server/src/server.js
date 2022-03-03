const http = require('http')
const mongoose = require('mongoose')

const app = require('./app')

const { loadPlanetsData } = require('./models/planets.model')

// const PORT = process.env.PORT || 8000
const PORT = 5000
const MONGO_URL =
  'mongodb+srv://nasausr:nasaDB22@cluster0.66lfq.mongodb.net/nasaDbApi?retryWrites=true&w=majority'

const server = http.createServer(app)

mongoose.connection.once('open', () => {
  console.log('MongoDb connection ready!')
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })

  await loadPlanetsData()

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
  })
}

startServer()
