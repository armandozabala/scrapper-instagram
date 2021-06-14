const { Router } = require('express');
const instagram = require('../instagram');

const routes = Router();

routes.get('/profile/:id', async (req, res) => {

    let id = req.params.id
    const resp = await instagram.getProfile(id);
     res.send(resp)
 });


 routes.get('/hashtag/:id', async (req, res) => {

     let id = req.params.id
     let resp = await instagram.getHashtag(id);

     res.send(resp);
 });


module.exports = routes;