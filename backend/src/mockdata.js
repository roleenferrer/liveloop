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

  const westCoordinates = [[36.97764626169339, -122.05368163447824], // Main
    [36.98014022969669, -122.05392229842532],
    [36.981503872834864, -122.05177191817315], // Lower Campus
    [36.982086472278986, -122.05101287849176],
    [36.98595973936468, -122.05353466324847], // Village/Farm
    [36.988876225962656, -122.05416754359003],
    [36.99132598825258, -122.05467384783088], // East Remote
    [36.994262307004135, -122.05552087263864], // Opers
    [36.995996468578156, -122.05526772053426],
    [36.997505079156035, -122.05502430503385], // Cowell Stevenson
    [36.99901716027637, -122.05516648229627], // Crown
    [36.99999650808738, -122.05625761088967],
    [36.99992055911849, -122.05830973329411], // C9/10
    [37.00017238961592, -122.06067217693204],
    [36.99999251077305, -122.06233890072781], // Science Hill
    [36.999296975228674, -122.06455118899356], // Kresge
    [36.99800532449152, -122.06391671866356],
    [36.99564948995448, -122.06348714422181],
    [36.99303235314711, -122.06520277123802], // Rachel C
    [36.991778952989314, -122.06678830340054], // Family Housing
    [36.989954017380064, -122.06719485016401], // Oakes
    [36.98736915817468, -122.06849579962358],
    [36.98368477929689, -122.06494233927916], // Arboretum
    [36.98206550904728, -122.06188191054262],
    [36.97988309587292, -122.05932066631097],
    [36.97988309587292, -122.05932066631097], // Western dr
    [36.97731155328987, -122.05518292484685],
  ];

  const eastCoordinates = [[36.97733025808223, -122.05430679422435], // Main
    [36.97782451848844, -122.05637333207557],
    [36.97880294286555, -122.05774541202086], // High and Western
    [36.98125030320782, -122.06067969948036],
    [36.98280155743951, -122.06270955722815], // Arboretum
    [36.987823254235636, -122.06868073272707],
    [36.989676185093074, -122.06743919248603],
    [36.99057192894047, -122.06609345596196],
    [36.99170854442661, -122.06664130250005],
    [36.99280367660653, -122.06485844210022], // Oakes
    [36.99156038517955, -122.06661547963819],
    [36.99280022074517, -122.0648655589224], // Rachel C
    [36.994230775178885, -122.06346150478655],
    [36.9967070505639, -122.06357267615063], // Kerr Hall
    [36.99920955242491, -122.06433852381984], // Kresge
    [36.99985050869678, -122.06217044110146], // Science Hill
    [37.00011966992853, -122.06033786053891],
    [36.99976078808444, -122.05830166006402], // C9/10
    [37.00012808120046, -122.05672184911631],
    [36.99902058893029, -122.05518065600967],
    [36.997503718880075, -122.05505427106927],
    [36.99665695016661, -122.05542289353082], // Book store
    [36.99439812896396, -122.05568103087101],
    [36.991257909744995, -122.05487817966481], // East Remote
    [36.98802056187918, -122.05432696850589],
    [36.985525156707354, -122.053547207525], // Village/Farm
    [36.983975967952745, -122.0523525737207],
    [36.981564281543704, -122.05210764881207], // Lower Campus
    [36.97962369685658, -122.05417701445727],
  ];

  const numShuttles = 4;

  shuttlePos = [8, 6, 4, 0]; // The starting positions for each shuttle

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
      const shuttleDir = await shuttleDirection(i + 1);

      let coordinates;
      if (shuttleDir == 'West') {
        coordinates = westCoordinates;
      } else {
        coordinates = eastCoordinates;
      }

      const select = `UPDATE buses
                      SET longitude = $1, latitude = $2
                      WHERE bus_id = $3`;
      const query = {
        text: select,
        values: [coordinates[shuttlePos[i]][0],
          coordinates[shuttlePos[i]][1], i + 1],
      };
      pool.query(query);

      if (shuttleDir == 'West') {
        if (shuttlePos[i] == coordinates.length - 1) {
          shuttlePos[i] = 0;
        } else {
          shuttlePos[i] += 1;
        }
      } else if (shuttleDir == 'East') {
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
  }, 3000); // 3 seconds
});
