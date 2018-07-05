import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="intro container">

          <header>
            <div className="intro-header">
              <img className="app-logo" src={ logo } alt="logo" />
              <h1 className="intro-title">Welcome to <span className="theme">react</span> starter kit</h1>
              <h3 className="intro-author">- by Mohit Malhotra </h3> 
            </div>
          </header>

          <section className="card intro-body">
              <div className="card-body">
                <p className="card-text">Thanks for downloading this react with redux starter kit. This respo provides you all the necessary dependencies like redux, axios and is designed in order to provide you the simplest kick start boiler plate for react.</p>
                
                <div className="block">
                  <h3 className="block-title"> # Some of its benefits</h3>
                  <ul className="list-group benefit-list">
                    <li className="list-group-item">Prebuild project structure to support simple react project as well as redux in react</li>
                    <li className="list-group-item">Root reducer boiler plate is available inside <code>src/reducers</code> module with reducer.js </li>
                    <li className="list-group-item">Bootstrap 4 is linked with HTML for styling</li>
                    <li className="list-group-item">Ajax Middleware <i>axios</i> is added as dependency along with react-promise library</li>
                  </ul>
                </div>

                <div className="block">
                  <h3 className="block-title"> # How to use ?</h3>
                  <ul className="list-group">
                    <li className="list-group-item">Install the module dependencies using NPM with
                    <br/> <code className="code">npm install --save</code>
                    <br /> inside the terminal / cmd and wait for a while.
                     </li>

                     <li className="list-group-item">Run the react application using command
                     <br /> <code className="code">npm start</code>
                     <br /> and enjoy programming with react.</li>

                    </ul>
                </div>
              </div>
            </section>

        </div>

      </div>
    );
  }
}

export default App;
