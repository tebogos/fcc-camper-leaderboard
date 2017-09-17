import React, { Component } from 'react';
import './LeaderTable.scss';

//Row component
const LeaderRow = ({row,number})=>(

  <tr>
  <td>{number}</td>
  <td><img className="avatar" src={row.img}/></td>
  <td>{row.username}</td>
  <td>{row.recent}</td>
  <td>{row.alltime}</td>
  </tr>

)
// Leaderboard Table component
class LeaderTable extends Component {
  // Gets alltime leaders from the rest appi
  // Toggle the radio button check state
  allTimeLeaders(){
    if(document.getElementById("checkbox2").checked){
      document.getElementById("checkbox2").checked=false;

    }
    else
    {  document.getElementById("checkbox2").checked=true;
    document.getElementById("checkbox1").checked=false;
  }
  this.props.allTimeLeaders();
}
// Gets the recent leaders from the rest appi
// Toggle the radio button check state
recentLeaders(){
  if(document.getElementById("checkbox1").checked)
  document.getElementById("checkbox1").checked=false;
  else
  {document.getElementById("checkbox1").checked=true;
  document.getElementById("checkbox2").checked=false;
}
this.props.recentLeaders();
}
render(){
  return  (
    <div className="table-wrap">
    <table className="leader-table">
    <caption>fcc camper leaderboard
    </caption>

    <thead className="leader-table__head">
    <tr>
    <th scope="col">#</th>
    <th scope="col">Avatar</th>
    <th scope="col">Camper Name</th>
    <th scope="col"><a href="#" className="leader-link1" onClick={this.recentLeaders.bind(this)} >Points in past 30 days</a><input id="checkbox1" type="radio"/><div className="check"></div></th>
    <th  scope="col"><a href="#" className="leader-link1" onClick={this.allTimeLeaders.bind(this)} >All time points</a><input id="checkbox2" type="radio"/><div className="check"></div></th>
    </tr>
    </thead>


    <tbody className="leader-table__body">
    {this.props.leaderTable.map((row,index)=><LeaderRow key={index} row={row} number={index+1} />)}


    </tbody>
    </table>
    </div>
  );
}

}

export default LeaderTable;
