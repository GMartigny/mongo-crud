/**
 * Connect to a MongoDB database
 * @param {import("mongodb").MongoClient} client - Your MongoDB client instance
 * @param {string} databaseName - Name of the database to use
 * @return {Promise<import("mongodb").Db>}
 */
module.exports = async (client, databaseName) => {
    await client.connect();
    return client.db(databaseName);
};
