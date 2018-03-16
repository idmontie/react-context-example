import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { TimeProvider } from './components/TimeProvider';
import Clock from './components/Clock';

class App extends Component {
	render() {
		return (
			<TimeProvider>
				<div><Clock seconds since={new Date()} /></div>
				<div><Clock since={new Date()} /></div>
				<div><Clock since={moment(new Date()).add(-1, 'minute')} /></div>
				<div><Clock since={moment(new Date()).add(-1, 'hour')} /></div>
				<div><Clock since={moment(new Date()).add(-1, 'days')} /></div>
			</TimeProvider>
		);
	}
}

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
