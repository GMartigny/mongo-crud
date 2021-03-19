/**
 * Add an item to the collection
 * @param {import("mongodb").Collection} collection
 * @param {Object} data - Object specifying the data to insert
 * @return {Promise<{_id}>}
 */
module.exports = async (collection, data) => {
    if (Array.isArray(data)) {
        const { insertedIds } = await collection.insertMany(data);
        return {
            _id: insertedIds,
        };
    }

    const { insertedId } = await collection.insertOne(data);
    return {
        _id: insertedId,
    };
};
