import pg from 'pg'
import env from 'dotenv'

env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

await db.connect();

console.log('Connected to DB')

db.on('error', (error) => {
    console.err('Unexpected error', error)
    process.exit(-1);
});

export const query = (text, params) => db.query(text, params);
