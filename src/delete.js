/**
 * Remove an item from the collection
 * @param {import("mongodb").Collection} collection
 * @param {Object} filter - Object specifying which item to delete
 * @return {Promise<{deletedCount}>}
 */
module.exports = async (collection, filter) => {
    const { deletedCount } = await collection.deleteOne(filter);
    return {
        deletedCount,
    };
};
