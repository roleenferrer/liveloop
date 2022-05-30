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

  const westCoordinates = [[-122.05785, 36.97875],
  [-122.05776, 36.9787],
  [-122.05774, 36.97869],
  [-122.05763, 36.97861],
  [-122.05754, 36.97855],
  [-122.05744, 36.97848],
  [-122.05731, 36.9784],
  [-122.05703, 36.97821],
  [-122.05669, 36.97798],
  [-122.05636,36.97775],
  [-122.05626,36.97769],
  [-122.05616,36.97762],
  [-122.05609,36.97758],
  [-122.05602,36.97754],
  [-122.05591,36.97749],
  [-122.05581,36.97745],
  [-122.05574,36.97743],
  [-122.05563,36.97739],
  [-122.05557,36.97738],
  [-122.05551,36.97736],
  [-122.05542,36.97735],
  [-122.05536,36.97733],
  [-122.05531,36.97733],
  [-122.05526,36.97732],
  [-122.05518,36.97732],
  [-122.05511,36.97731],
  [-122.05495,36.9773],
  [-122.05478,36.9773],
  [-122.05462,36.97729],
  [-122.05456,36.97729],
  [-122.0545,36.97728],
  [-122.05426,36.97725],
  [-122.05417,36.97724],
  [-122.05399,36.97722],
  [-122.05377,36.97721],
  [-122.05357,36.97721],
  [-122.05359,36.97739],
  [-122.0536,36.97747],
  [-122.05369,36.97774],
  [-122.05371,36.97777],
  [-122.05386,36.97799],
  [-122.05394,36.97807],
  [-122.05408,36.97841],
  [-122.05413,36.97852],
  [-122.05414,36.97855],
  [-122.05422,36.97879],
  [-122.05423,36.97883],
  [-122.05424,36.97893],
  [-122.05425,36.97906],
  [-122.05425,36.97919],
  [-122.05425,36.9793],
  [-122.05424,36.97941],
  [-122.05422,36.97949],
  [-122.0542,36.97959],
  [-122.05418,36.97965],
  [-122.05417,36.97968],
  [-122.05412,36.9798],
  [-122.05407,36.9799],
  [-122.05397,36.98007],
  [-122.05383,36.98025],
  [-122.05371,36.98038],
  [-122.05363,36.98046],
  [-122.05354,36.98053],
  [-122.05347,36.98059],
  [-122.05336,36.98067],
  [-122.05328,36.98072],
  [-122.05302,36.98088],
  [-122.0529,36.98096],
  [-122.05287,36.98098],
  [-122.05254,36.98117],
  [-122.05241,36.98124],
  [-122.05213,36.98141],
  [-122.05204,36.98146],
  [-122.05199,36.98149],
  [-122.051,36.98208],
  [-122.05105,36.98215],
  [-122.05122,36.9824],
  [-122.05133,36.98255],
  [-122.05166,36.98303],
  [-122.0522,36.98381],
  [-122.05231,36.98397],
  [-122.05242,36.98413],
  [-122.05253,36.98428],
  [-122.05307,36.98507],
  [-122.05359,36.98581],
  [-122.0541,36.98655],
  [-122.0542,36.9867],
  [-122.05426,36.98678],
  [-122.05435,36.98694],
  [-122.05438,36.98703],
  [-122.05442,36.98712],
  [-122.05443,36.98721],
  [-122.05444,36.98722],
  [-122.05445,36.98731],
  [-122.05445,36.98744],
  [-122.05445,36.98755],
  [-122.05444,36.98757],
  [-122.05442,36.98771],
  [-122.05441,36.98775],
  [-122.05437,36.98787],
  [-122.05435,36.98792],
  [-122.05433,36.98796],
  [-122.0543,36.98803],
  [-122.05427,36.98809],
  [-122.05425,36.98813],
  [-122.05422,36.98822],
  [-122.05421,36.98826],
  [-122.0542,36.98829],
  [-122.05417,36.98839],
  [-122.05417,36.98844],
  [-122.05416,36.98846],
  [-122.05416,36.98855],
  [-122.05416,36.98864],
  [-122.05416,36.98872],
  [-122.05417,36.98879],
  [-122.05418,36.98884],
  [-122.05421,36.98897],
  [-122.05422,36.98902],
  [-122.05425,36.98919],
  [-122.05428,36.98933],
  [-122.05429,36.98938],
  [-122.05433,36.98955],
  [-122.05439,36.98986],
  [-122.05445,36.99014],
  [-122.05448,36.99025],
  [-122.05455,36.99062],
  [-122.05456,36.99066],
  [-122.0546,36.99081],
  [-122.0546,36.99084],
  [-122.05461,36.99086],
  [-122.05463,36.99094],
  [-122.05465,36.99101],
  [-122.05443,36.99103],
  [-122.05418,36.99105],
  [-122.05409,36.99123],
  [-122.05426,36.99128],
  [-122.0543,36.9913],
  [-122.05451,36.99138],
  [-122.05453,36.99139],
  [-122.05454,36.99139],
  [-122.05454,36.9914],
  [-122.05455,36.9914],
  [-122.05455,36.99142],
  [-122.05455,36.99145],
  [-122.05455,36.99142],
  [-122.05455,36.9914],
  [-122.05454,36.9914],
  [-122.05454,36.99139],
  [-122.05453,36.99139],
  [-122.05451,36.99138],
  [-122.0543,36.9913],
  [-122.05426,36.99128],
  [-122.05409,36.99123],
  [-122.05418,36.99105],
  [-122.05443,36.99103],
  [-122.05465,36.99101],
  [-122.05468,36.99107],
  [-122.0547,36.99113],
  [-122.05473,36.99119],
  [-122.05474,36.99121],
  [-122.05476,36.99126],
  [-122.05503,36.99175],
  [-122.05505,36.9918],
  [-122.05507,36.99184],
  [-122.05509,36.99189],
  [-122.0551,36.99194],
  [-122.05512,36.99202],
  [-122.05513,36.9921],
  [-122.05514,36.99213],
  [-122.05514,36.99216],
  [-122.05515,36.99227],
  [-122.05515,36.99238],
  [-122.05515,36.99249],
  [-122.05515,36.9925],
  [-122.05515,36.99267],
  [-122.05515,36.99285],
  [-122.05515,36.99295],
  [-122.05516,36.99303],
  [-122.05516,36.99311],
  [-122.05516,36.99317],
  [-122.05517,36.99321],
  [-122.05517,36.99324],
  [-122.05519,36.9933],
  [-122.0552,36.99334],
  [-122.05522,36.9934],
  [-122.05525,36.99345],
  [-122.05528,36.99351],
  [-122.0553,36.99355],
  [-122.05541,36.99372],
  [-122.05548,36.99384],
  [-122.0555,36.99387],
  [-122.05551,36.9939],
  [-122.05557,36.99403],
  [-122.0556,36.99411],
  [-122.05562,36.99418],
  [-122.05564,36.99427],
  [-122.05564,36.99429],
  [-122.05565,36.99434],
  [-122.05565,36.9944],
  [-122.05566,36.99446],
  [-122.05566,36.99459],
  [-122.05564,36.9947],
  [-122.05563,36.99476],
  [-122.05562,36.99481],
  [-122.0556,36.99489],
  [-122.05557,36.99499],
  [-122.05554,36.99509],
  [-122.05547,36.99526],
  [-122.05544,36.99535],
  [-122.05542,36.9955],
  [-122.05541,36.99557],
  [-122.05538,36.99566],
  [-122.05533,36.99577],
  [-122.0553,36.99583],
  [-122.05525,36.99596],
  [-122.05523,36.99606],
  [-122.05524,36.99619],
  [-122.05524,36.99625],
  [-122.05525,36.99629],
  [-122.05528,36.99645],
  [-122.0553,36.99651],
  [-122.05532,36.99661],
  [-122.05534,36.99667],
  [-122.05536,36.99675],
  [-122.05537,36.99682],
  [-122.05536,36.9969],
  [-122.05535,36.99701],
  [-122.05534,36.99706],
  [-122.05531,36.99711],
  [-122.05528,36.99718],
  [-122.0552,36.99733],
  [-122.05518,36.99739],
  [-122.05513,36.99748],
  [-122.05512,36.99755],
  [-122.05512,36.99758],
  [-122.05513,36.99765],
  [-122.05513,36.99766],
  [-122.05516,36.99778],
  [-122.05519,36.99786],
  [-122.05521,36.99791],
  [-122.05522,36.99796],
  [-122.05523,36.99804],
  [-122.05523,36.9981],
  [-122.05523,36.99816],
  [-122.05523,36.99822],
  [-122.05521,36.99828],
  [-122.05519,36.99834],
  [-122.05515,36.99843],
  [-122.05513,36.99847],
  [-122.05508,36.99856],
  [-122.05502,36.99866],
  [-122.05494,36.9988],
  [-122.05517,36.9989],
  [-122.05522,36.99892],
  [-122.05527,36.99894],
  [-122.05534,36.99899],
  [-122.05541,36.99904],
  [-122.05546,36.99907],
  [-122.05552,36.99912],
  [-122.05556,36.99916],
  [-122.05557,36.99917],
  [-122.05562,36.99924],
  [-122.05568,36.99931],
  [-122.05578,36.99947],
  [-122.05586,36.99958],
  [-122.05589,36.99963],
  [-122.05593,36.99968],
  [-122.05598,36.99974],
  [-122.05602,36.99979],
  [-122.05606,36.99984],
  [-122.05611,36.99988],
  [-122.05617,36.99992],
  [-122.05626,36.99998],
  [-122.05642,37.00004],
  [-122.05647,37.00006],
  [-122.0565,37.00007],
  [-122.05657,37.00008],
  [-122.05665,37.0001],
  [-122.05677,37.00011],
  [-122.05681,37.00011],
  [-122.05692,37.00011],
  [-122.05694,37.00011],
  [-122.05714,37.00008],
  [-122.05739,37.00002],
  [-122.05757,36.99999],
  [-122.05769,36.99996],
  [-122.05797,36.99991],
  [-122.05809,36.99989],
  [-122.05824,36.99986],
  [-122.05829,36.99985],
  [-122.05838,36.99983],
  [-122.05843,36.99983],
  [-122.05857,36.99981],
  [-122.05875,36.9998],
  [-122.05883,36.9998],
  [-122.05897,36.99981],
  [-122.05908,36.99983],
  [-122.05917,36.99985],
  [-122.0593,36.99987],
  [-122.05967,36.99997],
  [-122.05982,37],
  [-122.06016,37.00008],
  [-122.06025,37.0001],
  [-122.06047,37.00015],
  [-122.06058,37.00017],
  [-122.06069,37.00019],
  [-122.06089,37.0002],
  [-122.06104,37.0002],
  [-122.06112,37.00019],
  [-122.06119,37.00019],
  [-122.06133,37.00018],
  [-122.06144,37.00016],
  [-122.06157,37.00014],
  [-122.06161,37.00013],
  [-122.06184,37.00007],
  [-122.06223,36.99989],
  [-122.06243,36.9998],
  [-122.06246,36.99978],
  [-122.06254,36.99975],
  [-122.06263,36.99972],
  [-122.06274,36.99969],
  [-122.06288,36.99966],
  [-122.06301,36.99963],
  [-122.06378,36.99946],
  [-122.06393,36.99943],
  [-122.06402,36.99941],
  [-122.06416,36.9994],
  [-122.0642,36.99939],
  [-122.06422,36.99939],
  [-122.06428,36.99939],
  [-122.06442,36.99939],
  [-122.06446,36.99918],
  [-122.06447,36.99915],
  [-122.06448,36.99906],
  [-122.0645,36.99898],
  [-122.06452,36.99881],
  [-122.06452,36.99878],
  [-122.06453,36.99874],
  [-122.06452,36.99867],
  [-122.06449,36.9986],
  [-122.06446,36.99855],
  [-122.0644,36.99844],
  [-122.06431,36.99835],
  [-122.06416,36.99822],
  [-122.06412,36.99819],
  [-122.06403,36.99812],
  [-122.06393,36.99804],
  [-122.06387,36.99798],
  [-122.06382,36.99794],
  [-122.06378,36.99788],
  [-122.06374,36.99782],
  [-122.0637,36.99768],
  [-122.06369,36.99758],
  [-122.06368,36.99751],
  [-122.06367,36.9974],
  [-122.06365,36.99722],
  [-122.06365,36.99704],
  [-122.06365,36.99697],
  [-122.06365,36.99694],
  [-122.06366,36.99681],
  [-122.06368,36.99668],
  [-122.06371,36.99651],
  [-122.06373,36.99642],
  [-122.06374,36.99627],
  [-122.06373,36.9962],
  [-122.06372,36.99614],
  [-122.06371,36.99613],
  [-122.0637,36.99608],
  [-122.06364,36.99597],
  [-122.06355,36.99585],
  [-122.06349,36.99576],
  [-122.0634,36.99558],
  [-122.06336,36.99551],
  [-122.06333,36.99544],
  [-122.06333,36.99532],
  [-122.06334,36.99523],
  [-122.06335,36.99513],
  [-122.06337,36.99501],
  [-122.06338,36.99494],
  [-122.06341,36.9948],
  [-122.06341,36.99476],
  [-122.06344,36.99458],
  [-122.06345,36.99448],
  [-122.06346,36.9944],
  [-122.06348,36.99424],
  [-122.0637,36.99377],
  [-122.06376,36.99366],
  [-122.06385,36.99345],
  [-122.06388,36.99339],
  [-122.06395,36.99327],
  [-122.06404,36.99314],
  [-122.06418,36.99304],
  [-122.06437,36.99294],
  [-122.06443,36.99292],
  [-122.0645,36.99291],
  [-122.06457,36.9929],
  [-122.06482,36.99289],
  [-122.06492,36.99289],
  [-122.06507,36.99289],
  [-122.06544,36.9929],
  [-122.06565,36.99289],
  [-122.0657,36.99289],
  [-122.06582,36.99287],
  [-122.06594,36.99283],
  [-122.06609,36.99278],
  [-122.06618,36.99273],
  [-122.06628,36.99267],
  [-122.06641,36.99257],
  [-122.0665,36.99247],
  [-122.06657,36.99237],
  [-122.06661,36.99229],
  [-122.06665,36.99221],
  [-122.06667,36.99215],
  [-122.06668,36.99209],
  [-122.0667,36.99198],
  [-122.0667,36.99193],
  [-122.0667,36.9919],
  [-122.06669,36.99181],
  [-122.06669,36.9918],
  [-122.06668,36.99174],
  [-122.06666,36.99169],
  [-122.06664,36.99162],
  [-122.06658,36.99149],
  [-122.06648,36.99136],
  [-122.06634,36.99117],
  [-122.06627,36.99106],
  [-122.06624,36.991],
  [-122.06622,36.99094],
  [-122.06621,36.99088],
  [-122.06621,36.99078],
  [-122.06621,36.99069],
  [-122.06622,36.99061],
  [-122.06625,36.99052],
  [-122.06627,36.99049],
  [-122.06629,36.99045],
  [-122.06635,36.99036],
  [-122.06641,36.99027],
  [-122.06648,36.9902],
  [-122.06658,36.99013],
  [-122.06668,36.99008],
  [-122.06688,36.98998],
  [-122.06702,36.98992],
  [-122.06703,36.98992],
  [-122.06714,36.98987],
  [-122.06726,36.98981],
  [-122.06734,36.98977],
  [-122.06741,36.98973],
  [-122.06745,36.9897],
  [-122.06751,36.98965],
  [-122.06757,36.9896],
  [-122.06763,36.98955],
  [-122.06774,36.98943],
  [-122.06784,36.98932],
  [-122.06791,36.9892],
  [-122.06795,36.98913],
  [-122.06799,36.98905],
  [-122.06802,36.98897],
  [-122.06803,36.98894],
  [-122.06804,36.98889],
  [-122.06808,36.98872],
  [-122.0681,36.98859],
  [-122.06812,36.98844],
  [-122.06814,36.98836],
  [-122.06816,36.98829],
  [-122.06819,36.98823],
  [-122.0682,36.98822],
  [-122.06823,36.98816],
  [-122.06826,36.98811],
  [-122.06828,36.98808],
  [-122.06832,36.98805],
  [-122.06838,36.98801],
  [-122.06846,36.98796],
  [-122.06858,36.98789],
  [-122.06872,36.98783],
  [-122.06853,36.9874],
  [-122.06848,36.9873],
  [-122.06842,36.98718],
  [-122.06833,36.987],
  [-122.06827,36.9869],
  [-122.06825,36.98686],
  [-122.06801,36.98649],
  [-122.06778,36.98618],
  [-122.06767,36.98604],
  [-122.06717,36.98546],
  [-122.06691,36.9852],
  [-122.06663,36.98495],
  [-122.06657,36.98489],
  [-122.06648,36.98482],
  [-122.06619,36.98459],
  [-122.06592,36.98439],
  [-122.06574,36.98426],
  [-122.06541,36.98404],
  [-122.06528,36.98396],
  [-122.06523,36.98393],
  [-122.06508,36.98384],
  [-122.06487,36.98372],
  [-122.06428,36.98341],
  [-122.06417,36.98336],
  [-122.06359,36.98309],
  [-122.06334,36.98297],
  [-122.06331,36.98296],
  [-122.06284,36.98272],
  [-122.06275,36.98267],
  [-122.06274,36.98267],
  [-122.06244,36.98249],
  [-122.0621,36.98229],
  [-122.06198,36.9822],
  [-122.06185,36.98212],
  [-122.06183,36.9821],
  [-122.06169,36.982],
  [-122.06159,36.98193],
  [-122.06145,36.98182],
  [-122.06126,36.98167],
  [-122.06102,36.98148],
  [-122.06079,36.98129],
  [-122.06077,36.98127],
  [-122.06064,36.98116],
  [-122.06048,36.98103],
  [-122.06004,36.98068],
  [-122.05983,36.98051],
  [-122.05965,36.98036],
  [-122.05959,36.9803],
  [-122.05945,36.98019],
  [-122.05934,36.98009],
  [-122.0592,36.97994],
  [-122.05917,36.97992],
  [-122.05915,36.9799],
  [-122.05913,36.97989],
  [-122.05912,36.97988],
  [-122.05911,36.97986],
  [-122.05909,36.97984],
  [-122.05907,36.97981],
  [-122.05902,36.97974],
  [-122.05896,36.97967],
  [-122.05891,36.9796],
  [-122.05886,36.97954],
  [-122.05881,36.97949],
  [-122.05876,36.97944],
  [-122.0587,36.97938],
  [-122.05864,36.97933],
  [-122.05853,36.97923],
  [-122.0584,36.97913],
  [-122.05833,36.97907],
  [-122.05825,36.97902],
  [-122.05816,36.97896],
  [-122.05794,36.9788],
  [-122.05786,36.97876],
  [-122.05785,36.97875]]

  const eastCoordinates = westCoordinates.slice().reverse();
  const numShuttles = 10;

  // The starting positions for each shuttle
  shuttlePos = [43, 250, 110, 400, 500, 80, 10, 250, 450, 300];

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
        coordinates = westCoordinates
      } else {
        coordinates = eastCoordinates
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

      if (shuttlePos[i] == coordinates.length - 1) {
        shuttlePos[i] = 0;
      } else {
        shuttlePos[i] += 1;
      }
    };
  };

  setInterval(() => {
    updatePositions();
  }, 700);
});
