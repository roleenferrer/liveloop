import React,{ useState } from "react";
import Map from "./Map.jsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  dropone: {
    float: "left",
    width: "50%",
    backgroundColor: 'lightgray'
  },
  map: {
    float: "right",
    width: "50%",
    height: "100hv",
  },
});

const options = [
  { label: 'Main Entrance', value: 'Main Entrance'},
  { label: 'Lower Campus', value: 'Lower Campus'},
  { label: 'The Farm', value: 'The Farm'},
  { label: 'East Remote', value: 'East Remote'},
  { label: 'East Field House', value: 'East Field House'},
  { label: 'Bookstore', value: 'Bookstore'},
  { label: 'Crown/Merril', value: 'Crown/Merril'},
  { label: '9/10', value: '9/10'},
  { label: 'Science Hill', value: 'Science Hill'},
  { label: 'Kresge', value: 'Kresge'},
  { label: 'RCC/Porter', value: 'RCC/Porter'},
  { label: 'Oaks', value: 'Oaks'},
  { label: 'Family Student Housing', value: 'Family Student Housing'},
  { label: 'Empire Grade', value: 'Empire Grade'}
];

const Times = ({ location, zoom }) => {
  const classes = useStyles();
  const [start, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <React.Fragment>
      <div className={classes.dropone}>
        <label>
          Select starting location:   
          <select value={start} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>

        <label> u selected {start} </label>

        <label>
          Select destination:   
          <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>
      <div className={classes.map}>
        <Map location={location} zoomLevel={zoom}></Map>
      </div>
    </React.Fragment>
  );
};



export default Times;