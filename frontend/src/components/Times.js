import React, { useState } from "react";
import { blueGrey, green } from "@mui/material/colors";
import { Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Typography } from "@mui/material";

// list of all bus stops to choose from
const stops = [
  "Main Entrance",
  "Lower Campus",
  "The Farm",
  "East Remote",
  "East Field House",
  "Bookstore",
  "Crown/Merrill",
  "9/10",
  "Science Hill",
  "Kresge",
  "RCC/Porter",
  "Oakes",
  "Family Student Housing",
  "EmpireGrade",
];

// times tables for walking time
const mainEntrance = [0, 7, 16, 26, 32, 36, 38, 43, 48, 44, 36, 31, 33, 18];
const lowerCampus = [7, 0, 8, 19, 24, 28, 31, 35, 40, 40, 33, 28, 32, 24];
const farm = [16, 8, 0, 11, 16, 20, 22, 27, 32, 35, 28, 23, 27, 24];
const eastRemote = [26, 19, 11, 0, 7, 13, 16, 20, 25, 35, 29, 30, 32, 32];
const eastFieldHouse = [32, 24, 16, 7, 0, 7, 10, 14, 19, 29, 24, 25, 27, 35];
const bookstore = [36, 28, 20, 13, 7, 0, 3, 7, 12, 23, 18, 19, 20, 21];
const crownMerrill = [38, 31, 22, 16, 10, 3, 0, 5, 10, 23, 19, 20, 22, 33];
const nineTen = [43, 35, 27, 20, 14, 7, 5, 0, 5, 18, 19, 21, 22, 23];
const scienceHill = [48, 40, 32, 25, 19, 12, 10, 5, 0, 13, 14, 17, 16, 27];
const kresge = [44, 40, 35, 35, 29, 23, 23, 18, 13, 0, 16, 13, 10, 20];
const rccPorter = [36, 33, 28, 29, 24, 18, 19, 19, 14, 10, 0, 5, 3, 4];
const oakes = [31, 28, 23, 30, 25, 19, 20, 21, 17, 13, 5, 0, 8, 15];
const familyStudent = [33, 32, 27, 32, 27, 20, 22, 22, 16, 10, 3, 8, 0, 12];
const empireGrade = [18, 24, 24, 32, 35, 31, 33, 33, 27, 20, 14, 15, 12, 0];

const timesTable = [
  mainEntrance,
  lowerCampus,
  farm,
  eastRemote,
  eastFieldHouse,
  bookstore,
  crownMerrill,
  nineTen,
  scienceHill,
  kresge,
  rccPorter,
  oakes,
  familyStudent,
  empireGrade,
];

// finds and returns the time it takes to walk from
// start to destination
function findTime(start, dest) {
  const startnum = stops.indexOf(start);
  const destnum = stops.indexOf(dest);
  if (startnum === -1 || destnum === -1) {
    return "";
  }
  return timesTable[startnum][destnum];
}

function Times() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  // Bus stops
  const options = [
    { label: "Main Entrance", value: "Main Entrance" },
    { label: "Lower Campus", value: "Lower Campus" },
    { label: "The Farm", value: "The Farm" },
    { label: "East Remote", value: "East Remote" },
    { label: "East Field House", value: "East Field House" },
    { label: "Bookstore", value: "Bookstore" },
    { label: "Crown/Merrill", value: "Crown/Merrill" },
    { label: "9/10", value: "9/10" },
    { label: "Science Hill", value: "Science Hill" },
    { label: "Kresge", value: "Kresge" },
    { label: "RCC/Porter", value: "RCC/Porter" },
    { label: "Oakes", value: "Oakes" },
    { label: "Family Student Housing", value: "Family Student Housing" },
    { label: "Empire Grade", value: "Empire Grade" },
  ];

  // handle changes with the select menu
  const handleSource = (event) => {
    setSource(event.target.value);
  };
  const handleDestination = (event) => {
    setDestination(event.target.value);
  };

  // creates the two select menus for starting and destination location
  // will tell user how long it will take to walk from source to dest
  return (
    <React.Fragment>
      <div
        style={{ display: "grid", background: blueGrey[900], height: "100vh" }}
      >
        <div style={{ display: "flex" }}>
          {/* Buttons to select a starting stop*/}
          <RadioGroup
            style={{
              float: "left",
              width: "40%",
              padding: "40px",
              color: "white",
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                value={option.value}
                label={option.label}
                sx={{ color: "white" }}
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                    onChange={handleSource}
                  />
                }
                labelPlacement="end"
              />
            ))}
          </RadioGroup>
          {/* Buttonns to select a destination */}
          <RadioGroup
            style={{
              float: "left",
              width: "40%",
              padding: "40px",
              color: "white",
            }}
          >
            {options.map((option) => (
              <FormControlLabel
                value={option.value}
                label={option.label}
                sx={{ color: blueGrey }}
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: green[400],
                      },
                    }}
                    onChange={handleDestination}
                  />
                }
                labelPlacement="end"
              />
            ))}
          </RadioGroup>
        </div>
        <div>
          {/* Given source and destination, indicate approximately how long for bus to arrive */}
          <Typography varaint="h2" style={{ padding: "40px", color: "white" }}>
            ESTIMATED WALKING TIME FROM&nbsp;
            {source}&nbsp;TO&nbsp;{destination}
            &nbsp;IS APPROXIMATELY:&nbsp;{findTime(source, destination)}{" "}
            &nbsp;MINUTES.
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Times;
