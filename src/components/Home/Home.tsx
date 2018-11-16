import * as React from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Home extends React.Component {
    public render() {
        return (
            <Container fluid>
                <Jumbotron >
                    <h1>Home page</h1>
                </Jumbotron>
            </Container>
        );
    }
}

export default Home;
