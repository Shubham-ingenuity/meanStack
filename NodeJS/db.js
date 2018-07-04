const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    if (!err) {
        console.log("MongoDB connected Sussesfully.");
    } else {
        console.log("Error in Db Connection: " + JSON.stringify(err, undefined, 2));
    }
})

module.exports = mongoose;