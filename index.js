const express = require("express");
var cors = require("cors");
const db = require("./queries");

const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(
  cors({
    origin: "*",
    methods: ["GET"],
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/empleado/:codigo", db.getEmpleadoByCodigo);
app.get("/producto/:codigo", db.getProductoByCodigo);
app.get("/ordenProduccion/:codigo", db.getOrdenProduccionByCodigo);
app.get("/tarea/:codigo", db.getTareaByCodigo);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
