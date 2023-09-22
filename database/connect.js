// Practice connecting to a MongoDB database!

require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASS}@cluster0.20e0qop.mongodb.net/?retryWrites=true&w=majority`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
});

async function connect() {
    try {
        await client.connect();
        await client.db('admin').command({ ping: 1 });
        console.log('Connected to MongoDB!');
    } catch (e) {
        console.log('Connection failed');
        console.error(e);
    }
}

async function close() {
    await client.close();
}

async function insertInto(db, collectionName, value) {
    const collection = client.db(db).collection(collectionName);
    await collection.insertOne(value);
}

async function run() {
    await connect();
    await insertInto('sample_airbnb', 'test', {name: 'Hello World!'});
    await close();
}

run().catch(console.dir);