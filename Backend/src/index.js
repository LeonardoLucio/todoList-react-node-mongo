const express = require('express');
const app = express();
app.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes')
app.use('/', TaskRoutes);
app.listen(3000, () =>{
    console.log('funcionando');
})
