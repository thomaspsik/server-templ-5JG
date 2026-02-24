import pg from 'pg';

pg.types.setTypeParser(1082, (value) => value);

const pool = new pg.Pool();

const query = (text, params) => pool.query(text, params);

export { query, pool };
