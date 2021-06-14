const { Router } = require('express');
const instagram = require('../instagram');

const routes = Router();

routes.get('/profile/:id',  (req, res) => {

    let id = req.params.id
    console.log(id);
    try{
        instagram.getProfile(id).then((resp) => {
            res.send(resp)
        }).catch((err) =>{
            console.log(err);
        })
      
    }catch(err){
        console.log("error"+err)
    }
   
 });


 routes.get('/hashtag/:id', async (req, res) => {

     let id = req.params.id
     let resp = await instagram.getHashtag(id);

     res.send(resp);
 });


module.exports = routes;