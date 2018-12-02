import * as React from 'react';
import * as _ from 'lodash';
import { Collapse, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';

import { SearchResults } from '../GoogleFetcher';

function ResultsSectionBody(props: ResultsSectionBodyProps) {
    if (props.results == null) {
        return null;
    }

    return (
        <ListGroup className="results">
            {_.map(props.results.items, (item, i) => (
                <ListGroupItem key={i} className="item">
                    <h6 className="title">{item.title}</h6>
                    <p className="snippet">{item.snippet}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        View
                    </a>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

interface ResultsSectionBodyProps {
    results: SearchResults | null;
}

export function ResultsSection(props: ResultsSectionProps) {
    const { state, id, header, results = null } = props;
    const [selected, selectSection] = state;
    const isSelected = selected === id;

    const handleClick = () => {
        if (isSelected) {
            selectSection(-1); // Select id -1 to collapse all
        } else {
            selectSection(id);
        }
    };

    return (
        <Card className={isSelected ? 'selected' : ''}>
            <CardHeader onClick={handleClick} style={{ cursor: 'pointer' }}>
                {header}
            </CardHeader>
            <Collapse isOpen={isSelected}>
                {typeof results === 'string' ? (
                    <CardBody>{results}</CardBody>
                ) : (
                    <ResultsSectionBody results={results} />
                )}
            </Collapse>
        </Card>
    );
}

export interface ResultsSectionProps {
    header: string;
    results?: SearchResults | string | null;
    state: [number, React.Dispatch<React.SetStateAction<number>>];
    id: number;
}
