import React from 'react';
import './Canvas.sass';

export class Canvas extends React.Component {
    public canvasElement = document.getElementById("canvas-id");

    render() {
       // return <h1>Hello, {this.props}</h1>;
        return <div className="canvas"><canvas id="canvas-id" className="canvas__canvas" width="512" height="512"></canvas></div>;
    }

    componentDidMount() {
        console.log("foobar", this.canvasElement)
    }
}

