import * as React from 'react';
import { GraphView } from 'react-digraph';

import CanvasNode from './CanvasNode';

const GraphConfig = {
    NodeTypes: {
        empty: {
            // required to show empty nodes
            typeText: 'None',
            shapeId: '#empty', // relates to the type property of a node
            shape: (
                <symbol viewBox="0 0 100 100" id="empty" key="0">
                    <circle cx="50" cy="50" r="45" />
                </symbol>
            ),
        },
        custom: {
            // required to show empty nodes
            typeText: 'Custom',
            shapeId: '#custom', // relates to the type property of a node
            shape: (
                <symbol viewBox="0 0 50 25" id="custom" key="0">
                    <ellipse cx="50" cy="25" rx="50" ry="25" />
                </symbol>
            ),
        },
    },
    NodeSubtypes: {},
    EdgeTypes: {
        emptyEdge: {
            // required to show empty edges
            shapeId: '#emptyEdge',
            shape: (
                <symbol viewBox="0 0 50 50" id="emptyEdge" key="0">
                    <circle cx="25" cy="25" r="8" fill="currentColor" />
                </symbol>
            ),
        },
    },
};

export default class Canvas extends React.Component {
    public readonly state = {
        graph: { nodes: [], edges: [] },
        selected: {},
    };
    public render() {
        const nodes = this.state.graph.nodes;
        const edges = this.state.graph.edges;
        const selected = this.state.selected;

        const NodeTypes = GraphConfig.NodeTypes;
        const NodeSubtypes = GraphConfig.NodeSubtypes;
        const EdgeTypes = GraphConfig.EdgeTypes;
        return (
            <div className="Canvas">
                <GraphView
                    ref="GraphView"
                    nodeKey="canvas"
                    nodes={nodes}
                    edges={edges}
                    selected={selected}
                    nodeTypes={NodeTypes}
                    nodeSubtypes={NodeSubtypes}
                    edgeTypes={EdgeTypes}
                />
            </div>
        );
    }
}
