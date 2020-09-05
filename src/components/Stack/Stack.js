import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import './Stack.css';
import Icon from '../Icon/Icon';

class Stack extends Component {
    render() {
        return (
            <Card className="Stack">
                <Card.Body>
                    <Card.Title className="StackTitle">{this.props.day}</Card.Title>
                    <Icon data={this.props.forecast} />
                    <Card.Text className="Description">{this.props.description.toUpperCase()}</Card.Text>
                    <Card.Text className="Temperature">
                        <b style={{ color: "black" }}>{Math.round(this.props.tempHigh)}&deg;</b> {Math.round(this.props.tempLow)}&deg;
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="Description">{this.props.footer}</Card.Footer>
            </Card>
        );
    }
}

export default Stack;