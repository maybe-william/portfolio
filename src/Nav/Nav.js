import React from 'react';
import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scrollHeight: 0};

    }

    componentDidMount() {
        this.scrollTimer = setInterval(function() {
            this.setState({
                scrollHeight: window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
            });
        }.bind(this), 33);
    }

    componentWillUnmount() {
        clearInterval(this.scrollTimer);
    }


    render() {
    return (
        <header className="Nav" style={(this.state.scrollHeight > 150) ? {height: "150px"} : {height: (300 - this.state.scrollHeight).toString() + "px"}}>
        <div className="Nav-logo">
        <img src={process.env.PUBLIC_URL + '/img/logo.jpg'} className="Logo" alt="logo" />
        <h3 className="Nav-name" >William Dyrland-Marquis</h3>
        </div>
        <div className="Nav-links" style={(this.state.scrollHeight > 150) ? {fontSize: "12px"} : {fontSize: (20 - (this.state.scrollHeight/20)).toString() + "px"}}>
        <h1><a href='#about'>About</a></h1>
        <h1><a href='#projects'>Projects</a></h1>
        <h1><a href='#resume'>Resume</a></h1>
        <h1><a href='#contact'>Contact</a></h1>
        </div>
        </header>
  );
    }
}

export default Nav;
