import Brainstormer from "../Brainstormer";

export default Brainstormer;

export type IGraph = {
    nodes: INode[];
    edges: IEdge[];
};
export type IEdge = {
    handleText?: string;
    source: string;
    target: string;
    type: string;
};

export interface INode {
    id: any;
    title: string;
    type: string | null;
    subtype?: string;
    x?: number;
    y?: number;
}
