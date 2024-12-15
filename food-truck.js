const express = require('express')
const app = express()
const port = 3020
const path = require('path')
const root =  path.join(__dirname, 'public')
const {getCollection, ObjectId} = require('./dbconnect')

// MiddleWare
app.use(express.json())
app.use(express.static('public'))


//BackEnd Routes
app.get('/api/v1/menu',async (request, response)=>{
   // response.send(menu)
   const collection = await getCollection('foodtruckAPI', 'Menu')
   const menuit = await collection.find({}).toArray()
   response.send(menuit)

})

app.get('/api/v1/events',async (request, response)=>{
 //   response.send(events)
    const collection = await getCollection('foodtruckAPI', 'Events')
    const eventss = await collection.find({}).toArray()
    response.send(eventss)
})
app.get('/api/v1/menu/:id', async(request, response)=>{
    const { id } = request.params
    const collection = await getCollection('foodtruckAPI', 'Menu')
    const found = await collection.find({"num": parseInt(id)}).toArray()
    if (found) response.send(found)
    else response.send({error: {message: 'Could not find menu item'}})
})

app.get('/api/v1/events/:id', async(request, response)=>{
    const { id } = request.params
    const collection = await getCollection('foodtruckAPI', 'Events')
    const found = await collection.find({"num": parseInt(id)}).toArray()
    if (found) response.send(found)
    else response.send({error: {message: 'Could not find menu item'}})
})

app.post('/api/v1/add-menu',async (request, reponse)=>{
    const {num, name, description, price, image_url} = request.body
    console.log({num, name, description, price, image_url})
    const collection = await getCollection('foodtruckAPI', 'Menu')
    const count = await collection.countDocuments()
    const _num = count + 1
    const result = await collection.insertOne({num: _num, name, description, price, image_url})
    console.log(result)
    reponse.send('done')
    
})

app.post('/api/v1/add-event', async(request, reponse)=>{
    const {num, name, location, date, time} = request.body
    console.log({num, name, location, date, time})
    const collection = await getCollection('foodtruckAPI', 'Events')
    const count = await collection.countDocuments()
    const _num = count + 1
    const result = await collection.insertOne({num: _num, name, location, date, time})
    console.log(result)
    reponse.send('done')

})


//FrontEnd Routes
app.get('/', (request, response)=>{
    response.sendFile('index.html', {root})
})

app.get('/event/:id', (request, response)=>{
    response.sendFile('index.html', {root})
})

app.get('/admin', (request, response)=>{
    response.sendFile('admin.html', {root})
})



app.listen(port, () => console.log(`Listening on port: localhost:${port}`))