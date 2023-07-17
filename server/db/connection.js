const mongoose = require('mongoose');

const url = "mongodb+srv://sparsh123:sparsh123@cluster0.cd08q20.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))