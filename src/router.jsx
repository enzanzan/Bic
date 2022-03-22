import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Admin from './admin';
import Home from './pages/home';
import Button from './pages/ui/button';
import Modals from './pages/ui/modals';
import Loadings from './pages/ui/loadings';
import Notification from './pages/ui/notification';
import Messages from './pages/ui/messages';
import Tabs from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousels from './pages/ui/carousels';

const IRouter = () => {
    return (
        <HashRouter>
            <App>
                <Switch>
                    <Route path='/' render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/home" component={Home} />
                                <Route path="/ui/buttons" component={Button} />
                                <Route path="/ui/modals" component={Modals} />
                                <Route path="/ui/loadings" component={Loadings} />
                                <Route path="/ui/notification" component={Notification} />
                                <Route path="/ui/messages" component={Messages} />
                                <Route path="/ui/tabs" component={Tabs} />
                                <Route path="/ui/gallery" component={Gallery} />
                                <Route path="/ui/carousels" component={Carousels} />
                                <Redirect to="/home" />
                            </Switch>
                        </Admin>
                    }
                    />
                </Switch>
            </App>
        </HashRouter>
    );
}

export default IRouter;