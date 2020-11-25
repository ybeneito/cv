import React, { Component } from "react";
import { portfolioData } from "../data/portfolioData";
import Project from "./Project";

export default class ProjectList extends Component {
  state = {
    projects: portfolioData,
    radios: [
      { id: 1, value: "HTML" },
      { id: 2, value: "SASS" },
      { id: 3, value: "JAVASCRIPT" },
      { id: 4, value: "REACT" },
      { id: 5, value: "BOOTSTRAP" },
    ],
    selectedRadio: "HTML",
  };

  handleRadio = (e) => {
    const radio = e.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    const { projects, radios, selectedRadio } = this.state;

    return (
      <div className="portfolioContent">
        <ul className="radioDisplay">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>
        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}
