/**function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li> Burger Website (HTML, CSS, JS)</li>
        <li>Food Clone using API</li>
      </ul>
    </div>
  );
}

export default Projects;**/
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2 className="projects-heading"> Projects</h2>
      <ul className="projects-list">
        <li className="project-item">
          Burger Website <span>(HTML, CSS, JS)</span>
        </li>
        <li className="project-item"> Food Clone using API</li>
      </ul>
    </div>
  );
}

export default Projects;
