import React from 'react';
import './Box.css';

class BoxHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div name={this.props.name} className="Box-header">
            <h2>
            {this.props.title}
            </h2>
            </div>
        );
    }
}

export default BoxHeader;
