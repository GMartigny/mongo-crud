/**
 * Retrieve items from a collection
 * @param {import("mongodb").Collection} collection
 * @param {Object} query - Object specifying which item to get
 * @param {Object} options - Query options
 * @see http://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find
 * @return {Promise<Array<Object>>}
 */
module.exports = async (collection, query, options) => {
    const cursor = await collection.find(query, options);
    return cursor.toArray();
};
