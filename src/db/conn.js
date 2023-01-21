//connecting to mongodb
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/registerFormData")
.then(() => {
    console.log(`connection successful`);
}).catch((err) => {
    console.log(err);
})