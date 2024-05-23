const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'states_db';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

const states = [
  { name: 'Alabama' },
  { name: 'Alaska' },
  { name: 'Arizona' },
  { name: 'Arkansas' },
  { name: 'California' },
  { name: 'Colorado' },
  { name: 'Connecticut' },
  { name: 'Delaware' },
  { name: 'Florida' },
  { name: 'Georgia' },
  { name: 'Hawaii' },
  { name: 'Idaho' },
  { name: 'Illinois' },
  { name: 'Indiana' },
  { name: 'Iowa' },
  { name: 'Kansas' },
  { name: 'Kentucky' },
  { name: 'Louisiana' },
  { name: 'Maine' },
  { name: 'Maryland' },
  { name: 'Massachusetts' },
  { name: 'Michigan' },
  { name: 'Minnesota' },
  { name: 'Mississippi' },
  { name: 'Missouri' },
  { name: 'Montana' },
  { name: 'Nebraska' },
  { name: 'Nevada' },
  { name: 'New Hampshire' },
  { name: 'New Jersey' },
  { name: 'New Mexico' },
  { name: 'New York' },
  { name: 'North Carolina' },
  { name: 'North Dakota' },
  { name: 'Ohio' },
  { name: 'Oklahoma' },
  { name: 'Oregon' },
  { name: 'Pennsylvania' },
  { name: 'Rhode Island' },
  { name: 'South Carolina' },
  { name: 'South Dakota' },
  { name: 'Tennessee' },
  { name: 'Texas' },
  { name: 'Utah' },
  { name: 'Vermont' },
  { name: 'Virginia' },
  { name: 'Washington' },
  { name: 'West Virginia' },
  { name: 'Wisconsin' },
  { name: 'Wyoming' }
];

async function seedDB() {
  try {
    await client.connect();
    console.log('Connected to database');
    const db = client.db(dbName);
    const collection = db.collection('states');
    await collection.insertMany(states);
    console.log('States inserted');
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

seedDB();
