import { Router } from 'express';
import instagram from '../instagram';

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



export default routes;