require('dotenv').config()

const { Pool } = require('pg')


const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: 'localhost',
    database: process.env.DATABASE_NAME,
    password: 'Moral007',
})

//YOU CANNOT DO THIS IN A REAL PROJECT!!! IT NEEDS TO BE IN SOMETHING LIKE ENV
const getClient = async () => {
    const client = await pool.connect()
    return client
}

module.exports = {
    getClient
}