const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://Duno:8bpDC1O8k6jPm1D1@cluster0.sfjkkkz.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

export default async function handler(req, res) {
        await client.connect(); // Connect to the MongoDB server
        const database = client.db('TabelaPeriodica'); // Select the 'TabelaPeriodica' database
        const collection = database.collection('Elementos'); // Select the 'Elementos' collection

        const data = await collection.find().toArray(); // Retrieve all documents from the collection

        res.json(data); // Send the retrieved data as a JSON response
}