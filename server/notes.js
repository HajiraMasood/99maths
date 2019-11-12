exports.plugin = {
  name: "notes-crud",
  version: "1.0.0",
  register: async function(server) {
    const Notes = server.db.collection("notes");
    server.route({
      method: "GET",
      path: "/api/notes",
      handler: async function(req, h) {
        const notes = await Notes.find({}).toArray();

        return notes;
      }
    });

    server.route({
      method: "POST",
      path: "/api/notes",
      handler: async function(req, h) {
        const note = req.payload;
        await Notes.insertOne(note);

        return note;
      }
    });
  }
};
