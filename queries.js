const Pool = require("pg").Pool;
const pool = new Pool({
  host: "10.34.0.40",
  port: 5432,
  user: "postgres",
  password: "calipsodb",
  database: "db_calipso_imai",
});

// Use parameterized queries to avoid syntax errors and SQL injection

const getEmpleadoByCodigo = (request, response) => {
  const codigo = request.params.codigo;
  const query = `SELECT codigo, descripcion, inicio 
        FROM VP_PIGOV2_EMPLEADO 
        WHERE codigo = $1`;

  pool.query(query, [codigo], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getProductoByCodigo = (request, response) => {
  const codigo = request.params.codigo;
  const query = `SELECT codigo, descripcion, tiene_certificado, certificado 
        FROM VP_PIGOV2_PRODUCTO 
        WHERE busqueda = $1`;

  pool.query(query, [codigo], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getOrdenProduccionByCodigo = (request, response) => {
  const codigo = request.params.codigo;
  const query = `SELECT codigo, descripcion, tarea, tarea_descripcion, horas_estimadas
        FROM VP_PIGOV2_ORDENPRODUCCION 
        WHERE codigo = $1`;

  pool.query(query, [codigo], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTareaByCodigo = (request, response) => {
  const codigo = request.params.codigo;
  const query = `SELECT codigo, descripcion 
        FROM v_servicio 
        WHERE activestatus = 0 
        and codigo = $1`;

  pool.query(query, [codigo], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getTareasPorEmpleado = (request, response) => {
  const codigo = request.params.codigo;
  const query = `SELECT tarea as codigo, TAREA_N as descripcion 
        FROM VP_PIGOV2_EMPLEADO_TAREA 
        WHERE codigo = $1`;

  pool.query(query, [codigo], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getEmpleadoByCodigo,
  getProductoByCodigo,
  getOrdenProduccionByCodigo,
  getTareaByCodigo,
  getTareasPorEmpleado,
};
