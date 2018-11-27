import * as React from 'react';
import { Container } from 'reactstrap';

import './Main.scss';
import Canvas from './Canvas';

export default class Main extends React.PureComponent {
    public render() {
        return (
            <section className="Main">
                Main Section
                <div>
                    <Canvas/>
                </div>
            </section>
        );
    }
}
