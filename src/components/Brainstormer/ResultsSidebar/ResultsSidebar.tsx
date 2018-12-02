import * as React from 'react';
import './ResultsSidebar.scss';
import { SearchResults } from '../GoogleFetcher';
import { ResultsSection } from './ResultsSection';

interface ResultsSidebarProps {
    searchResults: SearchResults | null;
}
export default function ResultsSidebar({ searchResults }: ResultsSidebarProps) {
    const state = React.useState(0);
    let results =
        searchResults ||
        `
Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,
Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum,`;

    return (
        <section className="side-bar ResultsSection">
            <ResultsSection id={0} header="Web results" state={state} results={results} />
            <ResultsSection id={1} header="Image results" state={state} />
            <ResultsSection id={2} header="Item Three" state={state} />
            <ResultsSection id={3} header="Item Four" state={state} />
        </section>
    );
}
