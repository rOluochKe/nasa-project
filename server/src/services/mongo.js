const mongoose = require('mongoose')

const MONGO_URL =
  'mongodb+srv://nasausr:nasaDB22@cluster0.66lfq.mongodb.net/nasaDbApi?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
  console.log('MongoDb connection ready!')
})

mongoose.connection.on('error', (err) => {
  console.error(err)
})

async function mongoConnect() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
}

async function mongoDisconnect() {
  await mongoose.disconnect()
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
}
