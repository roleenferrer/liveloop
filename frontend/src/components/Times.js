import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { blueGrey, green } from "@mui/material/colors";
import { Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
  dropone: {
    float: "left",
    width: "50%",
    backgroundColor: "lightgray",
  },
  map: {
    float: "right",
    width: "50%",
    height: "100hv",
  },
  body: {},
  text: {
    color: "white",
  },
});

const useThemes = createTheme({
  palette: {
    feature: {
      main: blueGrey[900],
    },
  },
});

function Times() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const options = [
    { label: "Main Entrance", value: "Main Entrance" },
    { label: "Lower Campus", value: "Lower Campus" },
    { label: "The Farm", value: "The Farm" },
    { label: "East Remote", value: "East Remote" },
    { label: "East Field House", value: "East Field House" },
    { label: "Bookstore", value: "Bookstore" },
    { label: "Crown/Merril College", value: "Crown/Merril College" },
    { label: "College 9/10", value: "College 9/10" },
    { label: "Science Hill", value: "Science Hill" },
    { label: "Kresge College", value: "Kresge" },
    { label: "RCC/Porter", value: "RCC/Porter" },
    { label: "Oaks College", value: "Oaks College" },
    { label: "Family Student Housing", value: "Family Student Housing" },
    { label: "Empire Grade", value: "Empire Grade" },
  ];

  const handleSource = (event) => {
    setSource(event.target.value);
  };
  const handleDestination = (event) => {
    setDestination(event.target.value);
  };

  return (
    <React.Fragment style={{ display: "block" }}>
      <RadioGroup style={{ float: "left", width: "50%" }}>
        <Typography style={{ color: "white" }}>
          SOURCE SELECTED: {source}
        </Typography>
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            label={option.label}
            sx={{ color: "white" }}
            control={
              <Radio
                sx={{
                  color: blueGrey[50],
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
      <RadioGroup style={{ float: "right", width: "50%" }}>
        <Typography style={{ color: "white" }}>
          DESTINATION SELECTED: {destination}
        </Typography>
        {options.map((option) => (
          <FormControlLabel
            value={option.value}
            label={option.label}
            sx={{ color: "white" }}
            control={
              <Radio
                sx={{
                  color: blueGrey[50],
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
    </React.Fragment>
  );
}

export default Times;
