const uuidv4 = require('uuid/v4');
const prepareDatabaseEntry = original => {
    const id = uuidv4();
    const shortendUrl = generateShortUrl(id);
    return ({
    uuid : id,
    short: shortendUrl,
    original
})}
const generateShortUrl = id => `https://shorten.io/${id}`

module.exports = {
    prepareDatabaseEntry,
    generateShortUrl
}