const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

let db = [
    {'1':{Nome: 'Abacate', Dica: 'Fruta'}},
    {'2':{Nome: 'Liquidificador', Dica: 'Objeto'}},
    {'3':{Nome: 'Canada', Dica: 'Lugar'}},
    {'1':{Nome: 'Rihana', Dica: 'Celebridade'}}
]

app.get('/',(req,res)=>{
    return res.json(db)
})



app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}`);
  }); 
  