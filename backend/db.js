import { MongoClient, ObjectId } from 'mongodb';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/todos';
const MONGO_DB = process.env.MONGO_DB || 'todos';

let db = null;
let collection = null;
export default class DB {
    connect() {
        return MongoClient.connect(MONGO_URI)
            .then(function (client) {
                db = client.db(MONGO_DB);
                collection = db.collection('todos');
            })
    }

    queryAll() {
        return collection.find().toArray();
    }

    queryById(id) {
        // TODO: Implement queryById
        return collection.findOne({"_id": ObjectId(id)})
    }

    update(id, order) {
        // TODO: Implement update
        return collection.updateOne({"_id": ObjectId(id)},{})
    }

    delete(id) {
        // TODO: Implement delete
        return collection.deleteOne({"_id": ObjectId(id)})
    }

    insert(order) {
        // TODO: Implement insert
    }
}
