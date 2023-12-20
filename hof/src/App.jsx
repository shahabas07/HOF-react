import React, { Component } from 'react'

import './App.css'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

      ]
    }
  }


  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          {/* Passing unique value to 'key' prop, eases the process for virtual DOM to remove the specific element and update HTML tree  */}
          <span>Id: {item.id}&nbsp; &nbsp; &nbsp;</span>
          <span>Name : {item.name}&nbsp; &nbsp; &nbsp;</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  }

  renderBasedonUsertype = () => {
    const desireduserType = 'Designer';
    const data = this.state.userData;

    return data
      .filter(user => user.user_type === desireduserType)
      .map(user => {
        return (
          <>
            <li className='list_ele'>
              <span>Id: {user.id}&nbsp; &nbsp; &nbsp;</span>
              <span>Name: {user.name}&nbsp; &nbsp; &nbsp;</span>
              <span>User Type: {user.user_type}&nbsp; &nbsp; &nbsp;</span>
            </li>
          </>
        );
      });
  };



  renderNameStartingJ = () => {
    const data = this.state.userData;

    return data
      .filter((user) => user.name.startsWith('J'))
      .map(user => {
        return (
          <>
            <li className='list_ele'>
              <span>Id: {user.id}&nbsp; &nbsp; &nbsp;</span>
              <span>Name: {user.name}&nbsp; &nbsp; &nbsp;</span>
              <span>User Type: {user.user_type}&nbsp; &nbsp; &nbsp;</span>
            </li>
          </>
        );
      });
  };


  renderOnDesiredAge = () => {
    // const desiredLetter = 'J';
    const data = this.state.userData;

    return data
      .filter(user => user.age >= 28 && user.age <= 50)
      .map(user => {
        return (
          <>
            <li className='list_ele'>
              <span>Id: {user.id}&nbsp; &nbsp; &nbsp;</span>
              <span>Name: {user.name}&nbsp; &nbsp; &nbsp;</span>
              <span>User Type: {user.user_type}&nbsp; &nbsp; &nbsp;</span>
            </li>
          </>
        );
      });
  };


  renderTotalYears = () => {
    const designers = this.state.userData.filter(user => user.user_type === 'Designer')
    const totalExperience = designers.reduce((total, designer)=> total + designer.years, 0);
    return totalExperience;

  };




  // <div>App</div>
  render() {
    return (
      <>

        <h3>LIST ALL ITEMS</h3>
        <div className='data'>
          <ul>{this.renderItems()}</ul>
        </div>


        <h3>LIST ALL DATA BASED ON USERTYPE
        </h3>
        <div className='vaapamanu'>
          <ul>{this.renderBasedonUsertype()}</ul>
        </div>


<h3>FILTER ALL DATA STARTING WITH THE LETTER J</h3>
        <div className='vaapamanu'>
          <ul>{this.renderNameStartingJ()}</ul>
        </div>


<h3>FILTER DATA BASED ON AGE</h3>
        <div className='vaapamanu'>
          <ul>{this.renderOnDesiredAge()}</ul>
        </div>


        <h3>FIND THE TOTAL EXPERIENCE OF THE DESIGNERS: {this.renderTotalYears()}</h3>
        

      </>
    )
  }
}