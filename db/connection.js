const Pool = require('pg').Pool;
const { dev:credentials  } = require('./credentials');

const { user, database, password, port, host} = credentials;

const pool = new Pool({ user, database, password, port, host});

module.exports = {
    pool,
};

