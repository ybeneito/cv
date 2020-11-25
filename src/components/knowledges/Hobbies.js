import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-gamepad"></i>
          <span>Jeux Vidéos</span>
        </li>
        <li className="hobby">
          <i className="fas fa-music"></i>
          <span>Musiques</span>
        </li>
        <li className="hobby">
          <i className="fas fa-at"></i>
          <span>Informatique et internet</span>
        </li>

        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Marche</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
