const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

exports.getLocation = async (req, res) => {
  const select = `SELECT * from buses`;
  const query = {
    text: select,
    values: [],
  };
  const {rows} = await pool.query(query);
  res.status(200).json(rows);
};
