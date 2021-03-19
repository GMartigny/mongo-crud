/**
 * Close the connection to the database
 * @param {import("mongodb").MongoClient} client - Your MongoDB client instance
 * @return Promise<void>
 */
module.exports = async client => client.close();
