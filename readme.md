# @gmartigny/mongo-crud

Simple functional CRUD operation for a MongoDB client.


## Installation

    npm install @gmartigny/mongo-crud


## Usage

```js
import { MongoClient } from "mongodb";
import { connect, use, post, get, put, del, close } from "@gmartigny/mongo-crud";

async function run () {
    const client = new MongoClient("mongodb+srv://...");
    
    try {
        const db = await connect(client, "MyDatabaseName");
        const collection = await use(db, "MyCollectionName");

        const inserted = await post(collection, {
            name: "John",
            age: 42,
        });
        const result = await get(collection, inserted);
        console.log(result); // { name: "John", age: 42 }

        await put(collection, inserted, {
            name: "Clara",
            age: 23,
        });
        const updated = await get(collection, inserted);
        console.log(updated); // { name: "Clara", age: 23 }

        del(collection, inserted);
    }
    finally {
        // Run whether fail or not
        close(client);
    }
}
```

You can (and should) use currying to avoid code duplication.

```js
import { connect, use, get } from "@gmartigny/mongo-crud";

const db = await connect(client);
const useCollection = use.bind(null, db);
const getUsers = get.bind(null, await useCollection("users"));
const getMessages = get.bind(null, await useCollection("messages"));
```


## License

[MIT](license)
