import React, { Component } from "react";

import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "HTML", xp: 1.5 },
      { id: 2, value: "CSS", xp: 1.5 },
      { id: 3, value: "Javascript", xp: 1 },
    ],
    framework: [
      { id: 1, value: "Bootstrap", xp: 1 },
      { id: 2, value: "Sass", xp: 0.7 },
      { id: 3, value: "React", xp: 0.3 },
    ],
  };

  render() {
    const { languages, framework } = this.state;

    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={framework}
          className="frameworksDisplay"
          title="frameworks & bibliothèques"
        />
      </div>
    );
  }
}

export default Languages;
