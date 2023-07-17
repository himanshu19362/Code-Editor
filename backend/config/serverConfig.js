require('dotenv').config();

module.exports = {
    PORT : process.env.PORT , 
    DB_URI : process.env.DB_URI ,
    CLIENT_URL : process.env.CLIENT_URL
}