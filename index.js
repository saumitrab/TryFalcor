const React = require('react');

const App = React.createClass({
  render() {
    return(
        <h1>Hi</h1>
      )
  }
});

React.render(<App/>, window.document.getElementById('target'));
