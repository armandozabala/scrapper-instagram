import express from 'express';
import config from './config';
import Routes from './routes/routes';

const app = express();

app.set('port', config.port || 3000);


app.get('/',(req,resp) => {
    resp.json({ msg: 'holis'})
});

app.use(Routes)

export default app;


