const mongodb = require('mongodb');

const mongodbOptions = {
  host: process.env.MONGODB_HOST || 'localhost',
  port: process.env.MONGODB_PORT || '27017',
  db: process.env.MONGODB_DATABASE || '',
};

module.exports = (async () => {
  const connection = new mongodb.MongoClient(`mongodb://${mongodbOptions.host}:${mongodbOptions.port}`);
  await connection.connect();
  return {
    connection,
    db: (mongodbOptions.db && await connection.db(mongodbOptions.db)) || null,
  };
})();
