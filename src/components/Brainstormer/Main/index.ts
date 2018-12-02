import Brainstormer from "../Brainstormer";
import { INode, IEdge } from "react-digraph";

export default Brainstormer;

export type IGraph = {
    nodes: INode[];
    edges: IEdge[];
};
