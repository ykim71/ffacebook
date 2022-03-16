import React from 'react';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import './index.css';
import FFacebook from './components/FFacebook';

export default () => {
    return (
        <Router>
            <Switch>
                <Router exact path="/negative_dem">
                    <FFacebook type="negative_dem"/>
                </Router>
                <Router exact path="/uncivil_dem">
                    <FFacebook type="uncivil_dem"/>
                </Router>
                <Router exact path="/neutral_dem">
                    <FFacebook type="neutral_dem"/>
                </Router>
                <Router exact path="/negative_rep">
                    <FFacebook type="negative_rep"/>
                </Router>
                <Router exact path="/uncivil_rep">
                    <FFacebook type="uncivil_rep"/>
                </Router>
                <Router exact path="/neutral_rep">
                    <FFacebook type="neutral_rep"/>
                </Router>
                <Router exact path="/negative_nonexpl">
                    <FFacebook type="negative_nonexpl"/>
                </Router>
                <Router exact path="/uncivil_nonexpl">
                    <FFacebook type="uncivil_nonexpl"/>
                </Router>
                <Router exact path="/neutral_nonexpl">
                    <FFacebook type="neutral_nonexpl"/>
                </Router>
            </Switch>
        </Router>
    );
}