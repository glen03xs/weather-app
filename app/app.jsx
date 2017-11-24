const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRouter, hashHistory} = require('react-router');
const Main = require('Main');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            
        </Route>
    </Router>,
    document.getElementById('app')
);