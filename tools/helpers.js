const uuidv4 = require('uuid/v4');

const prepareDatabaseEntry = original => {
    const id = uuidv4();
    const shortendUrl = generateShortUrl(id);
    return ({
    uuid : id,
    short: shortendUrl,
    original
})}

const generateShortUrl = id => `http://node-express-urls-shortener.v33mdsbcyb.us-east-2.elasticbeanstalk.com/${id}`

const isValidUrl = url => {
    console.log('Validation : ', url);
    const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    console.log('Validation : ', regexp.test(url));
    return regexp.test(url);
};

module.exports = {
    prepareDatabaseEntry,
    generateShortUrl,
    isValidUrl,
}