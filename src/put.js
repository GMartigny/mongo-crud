/**
 * Replace an item with a new one
 * @param {import("mongodb").Collection} collection
 * @param {Object} filter - Object specifying the item to replace
 * @param {Object} data - Object specifying the data to put
 * @return {Promise<void>}
 */
module.exports = async (collection, filter, data) => {
    await collection.replaceOne(filter, data);
};
