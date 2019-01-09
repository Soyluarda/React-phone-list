import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Contact from './Contact';

class App extends Component {
  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }

  state = {
    contacts: [{
      name: 'Mehmet',
      phone:'5434430973'
    },{
      name: 'Ahmet',
      phone:'5536531245'
    },{
      name: 'Nuri',
      phone:'5356788643'
    },{
      name: 'Pamir',
      phone:'5456253838'
    }]
  };

  addContact(contact){
    const { contacts } = this.state;
    contacts.push(contact);
    this.setState({
      contacts
    });

  }

  render() {
    return (
      <div className="App">
        <Contact contacts={this.state.contacts}
        addContact = {this.addContact}
        />
      </div>
    );
  }
}

export default App;
