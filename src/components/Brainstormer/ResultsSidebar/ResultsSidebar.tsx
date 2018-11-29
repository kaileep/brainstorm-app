import * as React from 'react';
import './ResultsSidebar.scss';
import { Collapse, Card, CardHeader } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import { INode } from '../Main';

function ResultsSection(props: ResultsSectionProps) {
    const { state, id, header, results} = props;

    const [selected, selectSection] = state;

    const isSelected = selected === id;
    return (
        <Card className={isSelected ? 'selected' : ''}>
            <CardHeader onClick={() => selectSection(id)} style={{ cursor: 'pointer' }}>
                {header}
            </CardHeader>
            <Collapse isOpen={isSelected}>
                <CardBody>
                    {results}
                </CardBody>
            </Collapse>
        </Card>
    );
}

interface ResultsSectionProps {
    header: string;
    results?: any;

    state: [number, React.Dispatch<React.SetStateAction<number>>];
    id: number;
}
interface ResultsSidebarProps{
    searchResults: string | null;
}
export default function ResultsSidebar({searchResults }:ResultsSidebarProps) {


    const state = React.useState(0);
let results =searchResults || `
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
