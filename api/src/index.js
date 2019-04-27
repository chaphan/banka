import express from 'express'
import router from './routes/index'
import { json, urlencoded } from 'body-parser'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './banka-api-docs.json'
import '@babel/polyfill'


var app = express();

const PORT = process.env.PORT || 3000;
const api_version = 'v1';

const base_url = '/api/'+ api_version;

app.use(json());
app.use(urlencoded({extended: true}));
app.use(base_url +'/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(router);

app.listen( PORT, () => {
    console.log( 'Express started on http://localhost:' + PORT + '; press Ctrl-C to terminate.' );
});

export default app;