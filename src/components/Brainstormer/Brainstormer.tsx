import * as React from 'react';
import { ResultsSidebar } from './ResultsSidebar';
import './Brainstormer.scss';
import Graph from './Main/Graph';
import { INode } from './Main';
import GoogleFetcher, { SearchResults } from './GoogleFetcher';

interface BrainstormerState {
    searchResults: string | null;
}
export default class Brainstormer extends React.Component<{}, BrainstormerState> {
    public readonly state: BrainstormerState = {
        searchResults: null,
    };
    constructor(props:{}){
        super(props);
        this.onNodeSelected = this.onNodeSelected.bind(this);
    }
    public onNodeSelected(selected: INode | null) {
        if (selected !== null) {
            GoogleFetcher.Search(selected.title).then((res: SearchResults) => {
                console.log(res);
                if(res&& res.items.length > 0) {
                    const first = res.items[0];

                    this.setState({ searchResults: first.title });
                }
            });
        }
    }
    public render() {
        return (
            <>
                <Graph onSelected={this.onNodeSelected} />
                <ResultsSidebar searchResults={this.state.searchResults} />
            </>
        );
    }
}
