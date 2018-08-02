const express = require('express');

const app = express();
const port= process.env.PORT || 3000;

const app_name = 'Ecommerce';


app.get('/', (req, res)=>{
    res.send('welcome to my ' + app_name + 'Application.');
});

app.listen(port, ()=>{
    console.log('Server is running on localhost:' + port + '.');
});