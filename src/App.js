import logo from './logo.svg';
import './App.css';
import React from 'react';
import { CustomInput } from './lib/Input/CustomInput';

 export default class App extends React.Component {
   render(){
    return (
      <div className="App">
        <header className="App-header">
          <CustomInput type='text'></CustomInput>
          
         
        </header>
      </div>
    );
  }

   }
 
