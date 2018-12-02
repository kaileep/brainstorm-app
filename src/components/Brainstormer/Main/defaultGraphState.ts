import { SPECIAL_EDGE_TYPE, EMPTY_EDGE_TYPE, SPECIAL_TYPE, SPECIAL_CHILD_SUBTYPE, EMPTY_TYPE, SKINNY_TYPE, POLY_TYPE } from "./graph-config";
import { IGraph } from ".";



// NOTE: Edges must have 'source' & 'target' attributes
// In a more realistic use case, the graph would probably originate
// elsewhere in the App or be generated from some other state upstream of this component.
const sample: IGraph = {
    edges: [
        {
            handleText: '5',
            source: 'start1',
            target: 'a1',
            type: SPECIAL_EDGE_TYPE,
        },
        {
            handleText: '5',
            source: 'a1',
            target: 'a2',
            type: SPECIAL_EDGE_TYPE,
        },
        {
            handleText: '54',
            source: 'a2',
            target: 'a4',
            type: EMPTY_EDGE_TYPE,
        },
        {
            handleText: '54',
            source: 'a1',
            target: 'a3',
            type: EMPTY_EDGE_TYPE,
        },
        {
            handleText: '54',
            source: 'a3',
            target: 'a4',
            type: EMPTY_EDGE_TYPE,
        },
        {
            handleText: '54',
            source: 'a1',
            target: 'a5',
            type: EMPTY_EDGE_TYPE,
        },
        {
            handleText: '54',
            source: 'a4',
            target: 'a1',
            type: EMPTY_EDGE_TYPE,
        },
        {
            handleText: '54',
            source: 'a1',
            target: 'a6',
            type: EMPTY_EDGE_TYPE,
        },
        {
            handleText: '24',
            source: 'a1',
            target: 'a7',
            type: EMPTY_EDGE_TYPE,
        },
    ],
    nodes: [
        {
            id: 'start1',
            title: 'Eggs',
            type: SPECIAL_TYPE,
        },
        {
            id: 'a1',
            title: 'Eggs Benedict',
            type: SPECIAL_TYPE,
            x: 258.3976135253906,
            y: 331.9783248901367,
        },
        {
            id: 'a2',
            subtype: SPECIAL_CHILD_SUBTYPE,
            title: 'Egg soup',
            type: EMPTY_TYPE,
            x: 593.9393920898438,
            y: 260.6060791015625,
        },
        {
            id: 'a3',
            title: 'Quail eggs',
            type: EMPTY_TYPE,
            x: 237.5757598876953,
            y: 61.81818389892578,
        },
        {
            id: 'a4',
            title: 'Jumbo eggs',
            type: EMPTY_TYPE,
            x: 600.5757598876953,
            y: 600.81818389892578,
        },
        {
            id: 'a5',
            title: 'Over-easy eggs',
            x: 50.5757598876953,
            y: 500.81818389892578,
        },
        {
            id: 'a6',
            title: 'Cheese Ommelete',
            type: SKINNY_TYPE,
            x: 300,
            y: 600,
        },
        {
            id: 'a7',
            title: 'Quiche',
            type: POLY_TYPE,
            x: 0,
            y: 300,
        },
    ],
};

export default sample;
