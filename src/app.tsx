import { hot } from '@nodegui/react-nodegui';
import React from 'react';
import MainWindow from './MainWindow';

class App extends React.Component {
  render() {
    return <MainWindow />;
  }
}

export default hot(App);
