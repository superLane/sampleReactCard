import React, { Component } from 'react';
import './App.css';
import Card from './components/Card/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card 
          cardTitle={"Task Status"} 
          cardStatus={"Completed"} 
          completed={2}
          cardStatus2={"On Target"}
          onTarget={155}>
        </Card>
        <Card 
          cardTitle={"Document Task Status"} 
          cardStatus={"Completed"} 
          completed={1}
          cardStatus2={"On Target"}
          onTarget={30}>
        </Card>
      </div>
    );
  }
}

export default App;
