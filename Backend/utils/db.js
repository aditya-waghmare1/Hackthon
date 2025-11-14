const mysql = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'D1_92982_Adityaa',
    password: 'maneger',
    database: 'Movies'
})

module.exports = pool