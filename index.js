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

app.listen(8080, ()=>{
    console.log("API online")
})
