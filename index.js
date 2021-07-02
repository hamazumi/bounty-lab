const express = require('express')

// require the databse
const db = require('./models')
//connect to it
db.connect()

//config our express app
const app = express()
const PORT = 3000

//request body middleware
app.use(express.urlencoded({ extended: false }))


// test index route / -- return a server message
app.get('/', (req, res) => {
    res.json({ msg: 'hello, this the bounties API'})
})

// GET /bounties -- READ all bounties from db
app.get('/bounties', async (req, res) => {
    try{
        const bounties = await db.Bountie.find({})
        res.json({ bounties })

    } catch(err) {
        console.log(err)
    }
})

//POST /bounties -- CREATE one bountie then redirect to /bounties
app.post('/bounties', (req, res) => {
    db.Bountie.create({
        name: req.body.name,
        wantedFor: req.body.wantedFor,
        client: req.body.client,
        reward: req.body.reward,
        ship: req.body.ship,
        hunters: req.body.hunters,
        captured: req.body.captured
    })
    .then(() => {
        res.redirect('/bounties')
    })
    .catch(err => console.log(err))
})

//PUT /bounties:id -- UPDATE one bountie and redirect to /bounties
app.put('/bounties/:id', (req, res) => {
    db.Bountie.findById(req.params.id)
    .then(foundBountie => {
        foundBountie.name = req.body.name
        foundBountie.wantedFor = req.body.wantedFor,
        foundBountie.client = req.body.client,
        foundBountie.reward = req.body.reward,
        foundBountie.ship = req.body.ship,
        foundBountie.hunters = req.body.hunters,
        foundBountie.captured = req.body.captured

        foundBountie.save()
        .then(() => {
            res.redirect('/bounties')
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

})

//DELETE /bounties/:id -- DESTROY one bountie and redirect to /bounties
app.delete('/bounties/:id', (req, res) => {
    db.Bountie.findByIdAndDelete(req.params.id)
        .then(deletedItem => {
            console.log(deletedItem)
            res.redirect('/bounties')
        })
})

app.listen(PORT, () => console.log('port working!!'))