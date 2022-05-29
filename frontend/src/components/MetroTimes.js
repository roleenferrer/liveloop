import React from "react";

const options = [
  {busNum: 15, dow: "Weekdays", src: "../metrotimes/15Weekdays.png"},
  {busNum: 18, dow: "Weekdays", src: "../metrotimes/18Weekdays.png"},
  {busNum: 18, dow: "Weekends", src: "../metrotimes/18Weekends.png"},
  {busNum: 19, dow: "Weekdays", src: "../metrotimes/19Weekdays.png"},
  {busNum: 19, dow: "Weekends", src: "../metrotimes/19Weekends.png"},
  {busNum: 20, dow: "Weekdays", src: "../metrotimes/20Weekdays.png"},
  {busNum: 20, dow: "Weekends", src: "../metrotimes/20Weekends.png"},
  {busNum: 22, dow: "Weekdays", src: "../metrotimes/22Weekdays.png"}
];

class MetroTimes extends React.Component {
    state = {
        busNumber: 0,
        currentSchedule: "../bus_icon.png"
    }

    handleMouseClick = (bus) => {
        this.setState({currentSchedule: bus.src});
    }

    render () {
        return (
            <div>
                {options.map((bus,index) => (
                    <p key={index} onClick={() => this.handleMouseClick(bus)}>
                        {bus.busNum} {bus.dow}
                    </p>
                ))}
                <img src={this.state.currentSchedule} alt="NONE!"></img>
            </div>
        )
    }
}

export default MetroTimes;