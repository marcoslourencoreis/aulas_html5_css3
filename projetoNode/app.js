const express = require('express');

//Rotas
const router = express.Router();
router.get('/',(req, res)=>{
 res.send('Ola Mundo! 2.0');
});


//configurações
const app = express();
app.use('/', router);

module.exports = app;