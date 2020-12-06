import React from 'react';
import './Canvas.sass';

export class Canvas extends React.Component {
    render() {
        return <div className="canvas">
            <canvas id="canvas-id" className="canvas__canvas" width="512" height="512"></canvas>
        </div>;
    }
}

