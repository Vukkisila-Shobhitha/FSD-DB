const { MongoClient } = require('mongodb');

async function main() {
    //establish the connection to the mongodb server

    const url = `mongodb+srv://shobitha6294:shobi6294@mongodb1.wvf3nob.mongodb.net/?retryWrites=true&w=majority&appName=MongoDB1`;
    
    const client = new MongoClient(url);

    try {
        //connect to the MongoDB Cluster
        await client.connect(); 
        console.log('Connected to the MongoDB cluster');

        //connect to the specific database
        const database = client.db('sample_airbnb');

        // connect to the specific collection
        const collection = database.collection('listingsAndReviews');

        //find all the documents with the country 'Brazil' in the collection
        const query = { 'address.country': 'Brazil'};

        //cursor: a pointer to the result set of a query
        const cursor = collection.find(query);

        const listings = await cursor.toArray();
        console.log(listings.map(listing => [listing.name, listing.price]));

       // iterate over the cursor
       //await cursor.forEach(doc => {
        //console.log(doc.name);
       //});
    }
    catch (e) {
        console.error(e);
    } 
    finally {
        await client.close();
        console.log('connection closed');
    }
}

main()