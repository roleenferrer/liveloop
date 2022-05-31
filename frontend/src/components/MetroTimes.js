import React from "react";
import { AppBar } from "@mui/material";
import { Tabs, Tab, Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

function MetroTimes() {
  // All schedules for SC Metro
  const schedules = [
    { name: "15 Weekdays", src: "../metrotimes/15WD.png" },
    { name: "18 Weekdays", src: "../metrotimes/18WD.png" },
    { name: "18 Weekends", src: "../metrotimes/18WE.png" },
    { name: "19 Weekdays", src: "../metrotimes/19WD.png" },
    { name: "19 Weekends", src: "../metrotimes/19WE.png" },
    { name: "20 Weekdays", src: "../metrotimes/20WD.png" },
    { name: "20 Weekends", src: "../metrotimes/20WE.png" },
    { name: "22 Weekdays", src: "../metrotimes/22WD.png" },
  ];

  const [selectedTab, setSelectedTab] = React.useState(0);

  // Detect when a new tab was clicked
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AppBar style={{ background: blueGrey[900] }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {/* Generate a tab for each schedule.name*/}
          <Tabs value={selectedTab} onChange={handleChange} centered>
            {schedules.map((bus, i) => (
              <Tab key={i} label={bus.name} style={{ color: "white" }} />
            ))}
          </Tabs>
        </Box>
      </AppBar>

      {/* Generate the window that hosts the schedule goes along with each tab */}
      {schedules.map((bus, i) => (
        <div
          style={{
            textAlign: "center",
            background: blueGrey[800],
          }}
        >
          {selectedTab === i && (
            <img src={bus.src} style={{ marginTop: "5%" }} alt="" />
          )}
        </div>
      ))}
    </Box>
  );
}

export default MetroTimes;
