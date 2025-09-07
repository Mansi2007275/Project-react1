/**function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        <li>Web Development (HTML, CSS, JavaScript, React)</li>
        <li>Problem Solving</li>
        <li>Chess Enthusiast</li>
      </ul>
    </div>
  );
}

export default Skills;**/
import "./Skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <ul className="skills-list">
        <li className="skill-item">
          Web Development <span>(HTML, CSS, JavaScript, React)</span>
        </li>
        <li className="skill-item"> Problem Solving</li>
        <li className="skill-item"> Chess Enthusiast</li>
      </ul>
    </div>
  );
}

export default Skills;
