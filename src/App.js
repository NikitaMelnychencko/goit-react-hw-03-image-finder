import { Component } from 'react';
import Section from 'components/Section/Section';
import Search from 'components/Search/Search';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Section title={'Phonebook'}></Section>
      </>
    );
  }
}
export default App;
