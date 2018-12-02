import * as React from 'react';
import { INode } from 'react-digraph';
import * as _ from 'lodash';

import { ResultsSidebar } from './ResultsSidebar';
import Graph from './Main/Graph';
import GoogleFetcher, { SearchResults } from './GoogleFetcher';
import './Brainstormer.scss';

const DEBOUNCE_MS = 50;

interface BrainstormerState {
    searchResults: SearchResults | null;
}

export default class Brainstormer extends React.Component<{}, BrainstormerState> {
    public readonly state: BrainstormerState = {
        searchResults: null,
    };
    constructor(props: {}) {
        super(props);
        this.onNodeSelected = _.debounce(this.onNodeSelected.bind(this), DEBOUNCE_MS);
    }

    public onNodeSelected(selected: INode | null): void {
        if (selected !== null) {
            GoogleFetcher.Search(selected.title).then(res => {
                this.setState({ searchResults: res });
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
