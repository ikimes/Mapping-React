import React, { Component } from 'react';
import List from './components/List';
import Images from './components/images';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      lists: [
          [{image: Images.orange, name:"orange", fact:"Oranges are unknown in the wild. They are a hybrid of the pomelo, or \"Chinese grapefruit\" (which is pale green or yellow), and the tangerine."}],
          [{image: Images.pear, name:"pear",fact:"Pears are one of the few fruits that have an extensive history, reaching back to about 1000 B.C."}],
          [{image: Images.banana, name:"banana",fact:"The banana is actually classified as a berry"}],
      ]
    }
  }


  render() {

    let lists = this.state.lists.map((itm) =>
      <List colors={itm}/>
  );
    return (
      <div className="App">
        {lists}
      </div>
    );
  }
}

export default App;
