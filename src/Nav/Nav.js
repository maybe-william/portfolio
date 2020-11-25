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
        const height = (this.state.scrollHeight > 150) ? 75 : (225 - this.state.scrollHeight);
        const linkFont = (this.state.scrollHeight > 150) ? 7 : (15 - (this.state.scrollHeight/20));
        const nameFactor = (this.state.scrollHeight > 150) ? 15 : (30 - (this.state.scrollHeight/10));

        return (
            <header className="Nav" style={{height: height.toString() + "px"}}>
            <div className="Nav-logo">
            <img src={process.env.PUBLIC_URL + '/img/logo.jpg'} className="Logo" alt="logo" />
            <h3 className="Nav-name" style={{fontSize: nameFactor.toString() + "px", margin: nameFactor.toString() + "px"}}>William <br /> Dyrland-Marquis</h3>
            </div>
            <div className="Nav-links" style={{fontSize: linkFont.toString() + "px"}}>
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
