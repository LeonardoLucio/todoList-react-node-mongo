const express = require('express');
const cors = require('cors')
const app = express();

app.use(express.json());

app.use(cors())

const TaskRoutes = require('./routes/TaskRoutes')
app.use('/', TaskRoutes);
app.listen(4000, () =>{
    console.log('funcionando');
})
