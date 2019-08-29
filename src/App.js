import React from 'react';
import './App.css';

import { Card } from "./components/card-render.component";
import {SearchBox} from "./components/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = { Users: [], searchField: "" }

  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => this.setState({ Users: data }))
  }

  render() {

    const {searchField , Users} = this.state;
    const filteredUsers = Users.filter(i =>  i.login.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div>
        <h1 className="header">Best GitHub Users</h1>

        <SearchBox
          placeholder = "Search Your Favorite Github User..."
          handleChange = {e => this.setState({ searchField: e.target.value })}
        />

        <Card Users={filteredUsers} />
      </div>
    )
  }
}

export default App;
