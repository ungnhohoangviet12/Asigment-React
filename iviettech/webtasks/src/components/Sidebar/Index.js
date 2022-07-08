// import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import React from 'react'
import './sidebar.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ROUTES from '../constants'


export default function Sidebar() {
    return (
        <Router>
            <div className='sidebar'>
                <ul>
                    <li>
                        <Link to="/alltask">All Task</Link>
                    </li>
                    <li>
                        <Link to="/newtask">New Task</Link>
                    </li>
                    <li>
                        <Link to="/doingtask">Doing Task</Link>
                    </li>
                    <li>
                        <Link to="/donetask">Done Task</Link>
                    </li>
                </ul>

                <hr />

                {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
          */}
                <Switch>
                    <Route exact path="/alltask">
                    </Route>
                    <Route path="/newtask">
                    </Route>
                    <Route path="/doingtask">
                    </Route>
                    <Route path="/donetask">
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}
