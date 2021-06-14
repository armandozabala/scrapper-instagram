const express  = require('express');
const Routes = require('./routes/routes');
const cors = require('cors');
const instagram = require('./instagram');
const axios = require('axios');
const app = express();

app.use(cors())

app.get('/:id', async (req,res) => {
    const photo = []
    let igUsername = req.params.id;
    /*instagram.getProfile('armandozabala86').then((resp) => {
        res.send(resp)
    }).catch((err) =>{
        console.log(err);
        res.send({msg: 'Holis Instagram 😌'})
    })*/
    let response = await axios.get('https://www.instagram.com/' + igUsername + '');
    const jsonObject = response.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1)
    const userInfo = JSON.parse(jsonObject)
   
        // Retrieve only the first 10 results
        const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 50)
        for (let media of mediaArray) {
            const node = media.node
            
            // Process only if is an image
            if ((node.__typename && node.__typename !== 'GraphImage')) {
                continue
            }

            // Push the thumbnail src in the array
            photo.push(node.thumbnail_src)
        }

        res.send(photo)
});

app.use(Routes)

module.exports = app;


