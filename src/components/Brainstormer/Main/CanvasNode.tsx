import * as React from 'react';

export default function CanvasNode(props: any) {
    const [position, setPosition] = React.useState([0, 0]);

    const [x, y] = position;

    return (
        <div>
            Node at ({x}, {y})<br />
        </div>
    );
}
