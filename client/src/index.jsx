import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      term: '',
    }
    this.searchSubmit = this.searchSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  searchSubmit (event) {
    var currentSearch = this.state.term;
    axios.post('/repos', {username: currentSearch});
  }

  onChange (event) {
    event.preventDefault();
    this.setState({
      term: event.target.value
    });
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onChange={this.onChange} searchSubmit={this.searchSubmit}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));