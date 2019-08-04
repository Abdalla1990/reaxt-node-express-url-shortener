const uuidv4 = require('uuid/v4');
const prepareDatabaseEntry = original => {
    const id = uuidv4();
    const shortendUrl = generateShortUrl(id);
    return ({
    uuid : id,
    short: shortendUrl,
    original
})}
const generateShortUrl = id => `https://elasticbeanstalk-us-east-2-296990967656.s3.us-east-2.amazonaws.com/${id}`

module.exports = {
    prepareDatabaseEntry,
    generateShortUrl
}