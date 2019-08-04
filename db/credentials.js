
const dev = {
    user : process.env.RDS_DB_USER || 'abdalla',
    database : process.env.RDS_DATABASE || 'urls',
    password: process.env.RDS_PA || '12345678',
    host: 'urls.cbs6yy5r1pr3.us-east-2.rds.amazonaws.com',
    port: process.env.RDS_PORT || '5432',
}

module.exports = {
    dev
}