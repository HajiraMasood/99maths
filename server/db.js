const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://admin:admin@cluster0-x5giy.mongodb.net/99math?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

exports.plugin = {
  name: "db",
  version: "1.0.0",
  register: async function(server) {
    await client.connect();

    server.decorate("server", "db", client.db("99math"));
  }
};
