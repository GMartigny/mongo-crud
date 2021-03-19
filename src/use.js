/**
 * Set the currently used collection
 * @param {import("mongodb").Db} database - Your MongoDB database instance (returned form connect)
 * @param {string} collectionName - Name of the collection to use
 */
module.exports = async (database, collectionName) => database.collection(collectionName);
