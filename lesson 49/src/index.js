import React, { Component } from 'react';
import ReactDom from 'react-dom';
import _ from 'lodash';

class App extends Component {
	render() {
		return (
			<div>
				<div>{_.join(['This', 'is', 'App'], ' ')}</div>
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));