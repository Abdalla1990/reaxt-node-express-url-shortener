
dev = {
    user : process.env.RDS_USERNAME || 'abdalla',
    db_name : process.env.RDS_DB_NAME || 'urls',
    password: process.env.RDS_PASSWORD || '123456',
    host: process.env.RDS_HOSTNAME || 'localhost',
    port: process.env.RDS_PORT || '5432',
}

prod = {
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
}
module.exports = {
    dev
}