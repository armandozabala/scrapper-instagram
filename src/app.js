const express  = require('express');
const Routes = require('./routes/routes');

const app = express();

app.get('/',(req,resp) => {
    resp.json({ msg: 'holis'})
});

app.use(Routes)

module.exports = app;


