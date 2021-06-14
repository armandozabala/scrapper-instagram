const express  = require('express');
const Routes = require('./routes/routes');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/',(req,resp) => {
    resp.json({ msg: 'holis'})
});

app.use(Routes)

module.exports = app;


