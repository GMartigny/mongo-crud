const test = require("ava");
const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");

const { connect, use, post, get, put, del, close } = require(".");

const prepareServer = async () => {
    const server = new MongoMemoryServer();
    const uri = await server.getUri();
    const dbName = await server.getDbName();
    return [uri, dbName];
};

test("Simple test", async (t) => {
    const [uri, dbName] = await prepareServer();

    const client = new MongoClient(uri, {
        useUnifiedTopology: true,
    });
    const db = await connect(client, dbName);
    const collection = await use(db, "test");
    const created = await post(collection, {
        key: "value",
    });
    t.truthy(created._id);

    const retrieved = await get(collection);
    t.is(retrieved.length, 1);
    t.is(retrieved[0].key, "value");

    await put(collection, created, {
        key: "newValue",
    });
    const newRetrieved = await get(collection);
    t.is(newRetrieved[0].key, "newValue");

    await del(collection, created);
    const emptyRetrieved = await get(collection);
    t.is(emptyRetrieved.length, 0);

    await close(client);
});
