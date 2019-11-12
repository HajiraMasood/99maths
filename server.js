const Hapi = require("@hapi/hapi");
const Path = require("path");

const DbPlugin = require("./server/db");

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3001,
    host: "0.0.0.0",
    routes: {
      cors: true
    }
  });

  await server.register(DbPlugin);
  await server.register(require("./server/notes"));

  await server.register(require("inert"));

  server.route({
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: Path.join(__dirname, "build")
      }
    }
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
