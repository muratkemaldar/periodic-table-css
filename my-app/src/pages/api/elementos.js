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

export default async function handler() {
        await client.connect(); // Connect to the MongoDB server
        const database = client.db('TabelaPeriodica'); // Select the 'TabelaPeriodica' database
        const collection = database.collection('Elementos'); // Select the 'Elementos' collection

        const data = await collection.find().toArray(); // Retrieve all documents from the collection

        const colorMap = {
            "noble gas": "#FFBC42",
            "alkaline earth metal": "#EC674E",
            "diatomic nonmetal": "#D81159",
            "alkali metal": "#8F2D56",
            "transition metal": "#58586B",
            "post-transition metal": "#218380",
            lanthanide: "#4AABAF",
            metalloid: "#73D2DE",
        };

        return (
            <div className="periodic-table">
              {data.elements.map((element) => (
                <div
                  className="element"
                  key={element.name}
                  style={{
                    gridRow: element.ypos,
                    gridColumn: element.xpos,
                    borderColor: colorMap[element.category],
                  }}
                >
                  <strong>{element.symbol}</strong>
                  <small className="number">{element.number}</small>
                  <small className="name">{element.name}</small>
                </div>
              ))}
            </div>
          );
}