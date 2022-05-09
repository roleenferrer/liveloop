require('dotenv').config();
const express = require('express');
const app = express();

app.listen(3011, () => {
  console.log('Mock data daemon starting');

  const {Pool} = require('pg');
  const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  });

  const coordinates = [[1, 100], [2, 200], [3, 300], [4, 400], [5, 500],
    [6, 400], [7, 300], [8, 200], [9, 100]];

  const numShuttles = 4;

  shuttlePos = [8, 6, 4, 1]; // The starting positions for each shuttle

  const shuttleDirection = async (busID) => {
    const getDirection = `SELECT direction
                        FROM Buses
                        WHERE bus_id = $1`;
    const rootQuery = {
      text: getDirection,
      values: [busID],
    };
    const {rows} = await pool.query(rootQuery);
    return rows[0].direction;
  };

  /**
  * Simulate shuttle movement by updating bus coordinates periodically.
  * https://stackoverflow.com/questions/45531690/how-to-create-an-infinite-loop-in-nodejs
  */
  async function updatePositions() {
    for (let i = 0; i < numShuttles; i++) {
      const select = `UPDATE buses
                      SET longitude = $1, latitude = $2
                      WHERE bus_id = $3`;
      const query = {
        text: select,
        values: [coordinates[shuttlePos[i]][0],
          coordinates[shuttlePos[i]][1], i + 1],
      };
      pool.query(query);

      if (await shuttleDirection(i + 1) == 'West') {
        if (shuttlePos[i] == coordinates.length - 1) {
          shuttlePos[i] = 0;
        } else {
          shuttlePos[i] += 1;
        }
      } else if (await shuttleDirection(i + 1) == 'East') {
        if (shuttlePos[i] == 0) {
          shuttlePos[i] = coordinates.length - 1;
        } else {
          shuttlePos[i] -= 1;
        }
      }
    };
  };

  setInterval(() => {
    updatePositions();
  }, 3000);
});
