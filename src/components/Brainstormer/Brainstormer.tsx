import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Sidebar } from './Sidebar';
import Main from './Main/Main';
import { ResultsSidebar } from './ResultsSidebar';
import './Brainstormer.scss';

export default class Brainstormer extends React.PureComponent {
    public render() {
        return (
            <>
                <Sidebar />
                <Main />
                <ResultsSidebar />
            </>
        );
    }
}
