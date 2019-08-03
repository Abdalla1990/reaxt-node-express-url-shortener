const { pool } = require('./connection');


const storeShortenedUrl = async ({uuid, short, original}) => {
    // console.log({uuid, short, original});
    const query = 'INSERT into records (assigned_id, shortenedurl, originalurl) VALUES ($1, $2, $3);';
    return await pool.query(query, [uuid, short, original]);
};

const fetchRecordById = async id => {
    const query = 'SELECT shortenedurl,originalurl,assigned_id from records where assigned_id = $1;'; 
    return await pool.query(query, [id])
}

const fetchRecordByShortUrl = async url => {
    const query = 'SELECT shortenedurl,originalurl,assigned_id from records where shortenedurl = $1;'; 
    return await pool.query(query, [url])
}

module.exports = {
    storeShortenedUrl,
    fetchRecordById,
    fetchRecordByShortUrl
}