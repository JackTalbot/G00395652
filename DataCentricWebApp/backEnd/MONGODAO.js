const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGO_URI; //Connects through MongoAtlas
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//Connecting to the database
const MONGODAO = (() =>{
    let db;

    const connect = async () => {
        await client.connect();
        db = client.db(process.env.MONGO_DB);
    };

    const getDB = () => {
        if (!db) throw new Error('Database Connection Error');
        return db;
    };

    return {
        connect,
        getDB
    };
})();

module.exports = MONGODAO;