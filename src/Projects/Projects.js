import Box from '../Box/Box';
import Project from './Project';

function Projects(props) {
    const loveBankDesc = "LoveBank is a mobile application with the goal of helping couples improve their relationship. Tasks are requested by one partner, with points being awarded upon their completion. The backend is written using Google Firebase and cloud functions, while the frontend is written using Flutter. This project was made with a team of ten other programmers using an agile methodology.";
    const rocketRidersDesc = "Rocket Riders is a game fashioned in the style of old fashioned space shoot 'em up games such as Galaga. The game features music, immersive 2D graphics, smooth gameplay, and a sense of nostalgia. This project was made with two other team members as the final project for Holberton School's foundational year. Rocket Riders is written using the Phaser3 game library for Javascript.";
    const leveledLootDesc = "LeveledLoot is a small minecraft mod that increases the amount of loot gained from mobs and from blocks as the player's level increases. This adds a sense of progression to the game, specifically dealing with the collection of materials. The mod is written using the Forge Mod Loader API, Gradle as a build system, and using Scala as the development language.";
    const visualizerDesc = "Clockwork Coders Visualizer was my first program written as part of the Clockwork Coders development group. It would take a sound file, analyze it's component parts using the Discrete Fourier Transform, generate an image based on the strength of different frequencies, and then save that image as a png file. It was written in Java and made use of the Swing GUI library. All of us in the development group were very proud to have completed this program. Sadly, it has been lost to the sands of time.";

    return (
        <Box anchor="projects" title="Projects">
        <Project title="LoveBank" projectLink="https://github.com/GittieLabs/lovebank-frontend" projectImage={process.env.PUBLIC_URL + '/img/LoveBank.png'} projectDescription={loveBankDesc} />
        <Project title="Rocket Riders" projectLink="https://github.com/maybe-william/RocketRiders" projectImage={process.env.PUBLIC_URL + '/img/RocketRiders.jpg'} projectDescription={rocketRidersDesc} />
        <Project title="LeveledLoot" projectLink="https://github.com/maybe-william/LeveledLoot" projectImage={process.env.PUBLIC_URL + '/img/LeveledLoot.png'} projectDescription={leveledLootDesc} />
        <Project title="Clockwork Coders Visualizer" projectLink="" projectImage={process.env.PUBLIC_URL + '/img/Visualizer.jpg'} projectDescription={visualizerDesc} />
        </Box>
    );
}

export default Projects;
