const Pool = require('pg').Pool
const pool = new Pool({
    host: '10.34.0.40',
    port: 5432,
    user: 'postgres',
    password: 'calipsodb',
    database: 'db_calipso_imai',
})

const getEmpleadoByCodigo = (request, response) => {
    const codigo = request.params.codigo
    const query = `SELECT codigo, descripcion, inicio 
        FROM VP_PIGOV2_EMPLEADO 
        WHERE codigo = '${codigo}'`;

    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getProductoByCodigo = (request, response) => {
    const codigo = request.params.codigo
    const query = `SELECT codigo, descripcion 
        FROM v_producto 
        WHERE activestatus = 0 
        and codigo = '${codigo}'`;

    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getOrdenProduccionByCodigo = (request, response) => {
    const codigo = request.params.codigo
    const query = `SELECT numerodocumento as codigo, nombre as descripcion 
        FROM v_trsolicitud 
        WHERE tipotransaccion_id = '{EDC2BC0F-F9CF-4D74-8742-CA8A2B7A264E}' 
        and numerodocumento = '${codigo}'`;

    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getTareaByCodigo = (request, response) => {
    const codigo = request.params.codigo
    const query = `SELECT codigo, descripcion 
        FROM v_servicio 
        WHERE activestatus = 0 
        and codigo = '${codigo}'`;

    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getTareasPorEmpleado = (request, response) => {
    const codigo = request.params.codigo
    const query = `SELECT tarea as codigo, TAREA_N as descripcion 
        FROM VP_PIGOV2_EMPLEADO_TAREA 
        WHERE codigo = '${codigo}'`;

    pool.query(query, (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
    getEmpleadoByCodigo,
    getProductoByCodigo,
    getOrdenProduccionByCodigo,
    getTareaByCodigo,
    getTareasPorEmpleado
}