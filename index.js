const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const DB = {
    games:[
        {
            id: 23,
            title: "Call of Duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 12,
            title: "Minecraft",
            year: 2012,
            price: 40
        },
        {
            id: 34,
            title: "Stalker: Shadow of Chernobyl",
            year: 2008,
            price: 20
        }
    ]
    
}

app.get('/games', (req, res) => {
    res.statusCode = 200
    res.json(DB.games)
})

app.get('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else{
        let id = parseInt(req.params.id)
        let game = DB.games.find(g=> g.id == id)

        if(game != undefined){
            res.statusCode = 200
            res.json(game)
        } else{
            res.sendStatus(404)
        }
    }

})

// Add game
app.post('/game', (req, res) => {
    let {title, year, price} = req.body

    DB.games.push({
        id: 35,
        title,
        year,
        price
    })

    res.statusCode = 200
})

// Delete Game
app.delete('/game/:id', (req, res)=>{
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else{
        let id = parseInt(req.params.id)
        let index = DB.games.findIndex(g=> g.id == id)
        
        if(index == -1){
            res.sendStatus(404)
        } else{
            DB.games.splice(index, 1)
            res.status = 200
        }
    }
    
})

// Update Data
app.put('/game/:id', (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else{
        let id = parseInt(req.params.id)
        let game = DB.games.find(g=> g.id == id)

        if(game != undefined){
            let {title, price, year} = req.body

            if(title != undefined){
                game.title = title
            }

            if(price != undefined){
                games.price = price
            }

            if(year != undefined){
                games.year = year
            }

            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
    }
    
})

app.listen(8080, ()=>{
    console.log("API online")
})
