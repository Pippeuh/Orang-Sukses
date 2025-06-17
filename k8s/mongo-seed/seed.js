const { MongoClient } = require('mongodb');

async function seed() {
  const uri = 'mongodb://mongo:27017/inventorydb'; // sesuaikan
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db();
    const items = db.collection('items');
    const count = await items.countDocuments();
    if (count === 0) {
      await items.insertMany([
        { name: 'Mouse Logitech', stock: 20, price: 150000 },
        { name: 'Keyboard Razer', stock: 10, price: 950000 },
        { name: 'Monitor LG', stock: 5, price: 2500000 }
      ]);
      console.log('✅ Database seeded!');
    } else {
      console.log('ℹ️ Database already has data.');
    }
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

seed();
