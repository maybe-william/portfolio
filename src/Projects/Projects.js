import Box from '../Box/Box';
import Project from './Project';

function Projects(props) {

    return (
        <Box anchor="projects" title="Projects">
        <Project title="LoveBank" projectLink="https://github.com/GittieLabs/lovebank-frontend" projectImage={process.env.PUBLIC_URL + '/img/LoveBank.png'} projectDescription="Description Description Description Description Description Description Description Description Description" />
        <Project title="Rocket Riders" projectLink="https://github.com/maybe-william/RocketRiders" projectImage={process.env.PUBLIC_URL + '/img/RocketRiders.jpg'} projectDescription="Description Description Description Description Description Description Description Description Description" />
        <Project title="LeveledLoot" projectLink="https://github.com/maybe-william/LeveledLoot" projectImage={process.env.PUBLIC_URL + '/img/LeveledLoot.png'} projectDescription="Description Description Description Description Description Description Description Description Description" />
        <Project title="Clockwork Coders Visualizer" projectLink="" projectImage={process.env.PUBLIC_URL + '/img/Visualizer.jpg'} projectDescription="Description Description Description Description Description Description Description Description Description" />
        </Box>
    );
}

export default Projects;
