import * as React from 'react';
import { GraphView } from 'react-digraph';

import CanvasNode from './CanvasNode';
import Graph from './Graph';

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
        graph: {
            nodes: [
                {
                    id: 1,
                    title: 'Node A',
                    x: 258.3976135253906,
                    y: 331.9783248901367,
                    type: 'empty',
                },
                {
                    id: 2,
                    title: 'Node B',
                    x: 593.9393920898438,
                    y: 260.6060791015625,
                    type: 'empty',
                },
                {
                    id: 3,
                    title: 'Node C',
                    x: 237.5757598876953,
                    y: 61.81818389892578,
                    type: 'custom',
                },
                {
                    id: 4,
                    title: 'Node C',
                    x: 600.5757598876953,
                    y: 600.81818389892578,
                    type: 'custom',
                },
            ],
            edges: [
                {
                    source: 1,
                    target: 2,
                    type: 'emptyEdge',
                },
                {
                    source: 2,
                    target: 4,
                    type: 'emptyEdge',
                },
            ],
        },
        selected: {
            id: 1,
            title: 'Node A',
            x: 258.3976135253906,
            y: 331.9783248901367,
            type: 'empty',
        },
    };
    constructor(props: any) {
        super(props);
        this.onSelectNode = this.onSelectNode.bind(this);
    }
    onSelectNode(...args: any) {
        console.log('args', args);
    }
    onCreateNode(...args: any) {
        console.log('args', args);
    }

    onUpdateNode(...args: any) {
        console.log('args', args);
    }

    onDeleteNode(...args: any) {
        console.log('args', args);
    }

    onSelectEdge(...args: any) {
        console.log('args', args);
    }

    onCreateEdge(...args: any) {
        console.log('args', args);
    }

    onSwapEdge(...args: any) {
        console.log('args', args);
    }

    onDeleteEdge(...args: any) {
        console.log('args', args);
    }

    public render() {
        const nodes = this.state.graph.nodes;
        const edges = this.state.graph.edges;
        const selected = this.state.selected;

        const NodeTypes = GraphConfig.NodeTypes;
        const NodeSubtypes = GraphConfig.NodeSubtypes;
        const EdgeTypes = GraphConfig.EdgeTypes;
        return (
            <>
                <Graph />
                {/* <GraphView
                    ref="GraphView"
                    nodeKey="canvas"
                    nodes={nodes}
                    edges={edges}
                    selected={selected}
                    nodeTypes={NodeTypes}
                    nodeSubtypes={NodeSubtypes}
                    onSelectNode={this.onSelectNode}
                    onCreateNode={this.onCreateNode}
                    onUpdateNode={this.onUpdateNode}
                    onDeleteNode={this.onDeleteNode}
                    onSelectEdge={this.onSelectEdge}
                    onCreateEdge={this.onCreateEdge}
                    onSwapEdge={this.onSwapEdge}
                    onDeleteEdge={this.onDeleteEdge}
                    edgeTypes={EdgeTypes}
                /> */}
            </>
        );
    }
}
