import React from 'react';
import './Box.css';
import BoxHeader from './BoxHeader';

class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id={this.props.anchor} className="Box">
            <BoxHeader title={this.props.title} />
            <div className="Box-content-wrapper">
            <div className="Box-content">
            {this.props.children}
            </div>
            </div>
            </div>
        );
    }
}

export default Box;
