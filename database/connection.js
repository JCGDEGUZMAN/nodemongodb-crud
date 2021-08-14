import mongoose from 'mongoose';

const CONNECTION_URL = 'mongodb://127.0.0.1/NodeMongoDB';

mongoose.set('useFindAndModify', false);

const dbconnection = mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;

con.on('open',  () => {
    console.log("db connected!");
})

export default dbconnection;