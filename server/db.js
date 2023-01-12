const mongoose = require('mongoose');

require('dotenv').config()

mongoose.Promise = global.Promise;
// mongoose.set("debug", (collectionName, method, query, doc) => {
//     console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
// });
const mongooseOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    loggerLevel: 'info',
}

const connectMongo = new Promise((res, rej) => {
    mongoose.set("strictQuery", false);

    mongoose.connect(process.env.MONGODB_CONNECTION_URL, mongooseOptions).then(() => {
        res(true)
    }).catch((e) => {
        rej(e?.message)
    })
});

module.exports = { connectMongo }