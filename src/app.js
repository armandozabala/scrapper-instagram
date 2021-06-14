const express  = require('express');
const Routes = require('./routes/routes');
const cors = require('cors');
const instagram = require('./instagram');
const app = express();

app.use(cors())

app.get('/', async (req,res) => {

    instagram.getProfile('armandozabala86').then((resp) => {
        res.send(resp)
    }).catch((err) =>{
        console.log(err);
        res.send({msg: 'Holis Instagram 😌'})
    })
 
});

app.use(Routes)

module.exports = app;


