const Pool = require('pg').Pool;
const { dev:credentials  } = require('./credentials');

const { user, database, password, port, host} = credentials;
// console.log(credentials);
const pool = new Pool({ user, database, password, port, host});

console.log(pool);
module.exports = {
    pool,
};

