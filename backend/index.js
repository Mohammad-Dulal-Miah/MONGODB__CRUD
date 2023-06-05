const express = require('express')
const app = express()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')

//middleWare
const cors = require('cors')
app.use(cors())
app.use(express.json())

//port

const port = process.env.PORT || 5000

const uri =
  'mongodb+srv://admin:admin@cluster0.t7rgz1u.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

async function run() {
  try {
    await client.connect()
    const userCollection = client.db('Students').collection('information')

    app.post('/students/student/information', async (req, res) => {
      const user = req.body
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    app.get('/students/student/information', async (req, res) => {
      const query = {}
      const cursor = userCollection.find(query)
      const result = await cursor.toArray()
      res.send(result)
    })

    app.get('/students/student/information/:id', async (req, res) => {
      const id = req.params.id

      const query = { _id: new ObjectId(id) }

      const result = await userCollection.findOne(query)
      res.send(result)
    })

    app.delete('/students/student/information/:id', async (req, res) => {
      const id = req.params.id
      console.log(id)
      const query = { _id: new ObjectId(id) }
      const result = await userCollection.deleteOne(query)
      res.send(result)
    })

    app.put('/user/update/:id', async (req, res) => {
      const id = req.params.id
      const filter = { _id: new ObjectId(id) }
      const data = req.body
      const option = { upsert: true }
      const updateInformation = {
        $set: {
          name: data.name,
          email: data.email,
        },
      }

      const result = await userCollection.updateOne(
        filter,
        updateInformation,
        option,
      )
      res.send(result)
      //console.log(data)
    })
  } finally {
  }
}
run().catch(console.dir)

app.listen(port, () => {
  console.log(`server is run in the port number is ${port}`)
})
