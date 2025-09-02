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

const sayHello = async (req, res) => {
  return res.status(200).json({
    success: true,
    message: "👋 🌏 Hola. Servicio Backend de Calipso para IMAI.",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
};

app.get('/', sayHello); 


app.get('/empleado/:codigo', db.getEmpleadoByCodigo)
app.get('/producto/:codigo', db.getProductoByCodigo)
app.get('/ordenProduccion/:codigo', db.getOrdenProduccionByCodigo)
app.get('/tarea/:codigo', db.getTareaByCodigo)
app.get('/tareasPorEmpleado/:codigo', db.getTareasPorEmpleado)


app.get("/empleado/:codigo", db.getEmpleadoByCodigo);
app.get("/producto/:codigo", db.getProductoByCodigo);
app.get("/ordenProduccion/:codigo", db.getOrdenProduccionByCodigo);
app.get("/tarea/:codigo", db.getTareaByCodigo);

app.listen(port, () => {
  console.log(`🚀 Servidor ejecutándose en puerto ${port}`);
  console.log(`📍 API disponible en: http://localhost:${port}`);
});
