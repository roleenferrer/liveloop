require('dotenv').config();
const express = require('express');
const app = express();

app.listen(3011, () => {
  console.log('Mock data feed starting');

  const {Pool} = require('pg');
  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  /**
  * Simulate shuttle movement by updating bus coordinates periodically.
   * https://stackoverflow.com/questions/45531690/how-to-create-an-infinite-loop-in-nodejs
  * @param {int} counter
  */
  function updatePositions(counter) {
    const coordinates = [[1, 100], [2, 200], [3, 300], [4, 400], [5, 500]];

    for (let i = 1; i <= 2; i++) {
      const select = `UPDATE buses
                      SET longitude = $1, latitude = $2
                      WHERE bus_id = $3`;
      const query = {
        text: select,
        values: [coordinates[counter][0], coordinates[counter][1], i],
      };
      pool.query(query);
    };
  };

  counter = 0;

  setInterval(() => {
    counter = counter % 5;
    updatePositions(counter);
    counter += 1;
  }, 800);
});
