import React, { Component } from 'react';
import {getRecentLeaders,getAllTimeLeaders} from '../lib/leaderServices';
import LeaderTable from './LeaderTable';




class App extends Component {


  constructor() {
    super();
    this.state = {leaderTable: []};
  }
  //Calls the fecth rest api to get the leaders after the App component mounts
  componentDidMount() {
    getRecentLeaders().then(leaders=>this.setState({leaderTable:leaders}))
  }
  //Calls the alltimeleader from the rest api when the user clicks on the allTimeLeaders link
  displayAllTimeLeaders(){
    getAllTimeLeaders().then(leaders=>this.setState({leaderTable:leaders}));
  }
 //Calls the Recentleader from the rest api when the user clicks on the Recentleader link
  displayRecentLeaders(){
    getRecentLeaders().then(leaders=>this.setState({leaderTable:leaders}));
  }

  render() {
    return (
      <div>
      <LeaderTable recentLeaders={this.displayRecentLeaders.bind(this)}
      allTimeLeaders={this.displayAllTimeLeaders.bind(this)} leaderTable={this.state.leaderTable}/>
      </div>
    );
  }

}

export default App;
