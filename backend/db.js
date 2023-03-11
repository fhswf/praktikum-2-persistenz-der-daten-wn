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
        let f = {_id : new ObjectId(id)}
        return collection.findOne(f)
    }

    update(id, order) {
        // TODO: Implement update
        let u = {_id : new ObjectId(id)}
        let data
        return collection.updateOne(u,data)
    }

    delete(id) {
        // TODO: Implement delete
        let d = {_id : new ObjectId(id)} 
        return collection.deleteOne(d)
    }

    insert(order) {
        // TODO: Implement insert
    }
}
