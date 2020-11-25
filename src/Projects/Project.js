import './Projects.css';

function Project(props) {
    return (
        <div className="Project">
        <div className="Project-header">
        <img className="Project-image" src={props.projectImage}/>
        <div className="Project-meta">
        <h4>
        {props.title}
        </h4>
        { (props.projectLink && props.projectLink !== "") ?
        <h5>
        <a className="App-link" href={props.projectLink}>
        View Project Repo
        </a>
        </h5> : ""
        }
        </div>
        </div>
        <div className="Project-description">
        <p>
        {props.projectDescription}
        </p>
        </div>
        </div>
    );
}

export default Project;
