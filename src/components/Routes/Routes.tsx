import * as React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Home } from '../Home';
import Brainstormer from '../Brainstormer';

function Routes() {
    return (
        <>
            <Switch>
                <Route path="/main" component={Brainstormer}/>
                <Route component={Home}/>
            </Switch>
        </>
    );
}

export default withRouter(Routes);
