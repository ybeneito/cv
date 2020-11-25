import React from "react";

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <h3>Autres Compétences</h3>
      <div className="list">
        <ul>
          <li>
            <i className="fas fa-check-square"></i>{" "}
            <span>Anglais écrit et lu courant</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i> <span>GitHub</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i> <span>Methodes agiles</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i> <span>Photoshop</span>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fas fa-check-square"></i> <span>Firebase</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i> <span>Linux</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>{" "}
            <span>Notions de node.js</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>{" "}
            <span>Problème d'informatique en général</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
