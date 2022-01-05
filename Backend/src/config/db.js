const mongoose = require('mongoose');

//conexão com banco de dados mongo default
const url = 'mongodb://localhost:27017/drew';
mongoose.connect(url, { useNewUrlParser: true});

module.exports = mongoose;