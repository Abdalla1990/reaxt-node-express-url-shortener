const Pool = require('pg').Pool;
const { user, password, host, db_name: database, port } = require('./credentials');

const pool = new Pool({
    user,
    database,
    password,
    host,
    port
});

module.exports = {
    pool,
};

