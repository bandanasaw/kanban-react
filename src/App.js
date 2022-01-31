
import './App.css';
import React from 'react';

import { Header } from './lib/Header/Header';
import { AddingCard } from './component/AddingCard/AddingCard';

export default class App extends React.Component {
    render() {
        return ( 
        < div className = "App" >
            < div className = "App-header" >
            < Header brandName='Boards'> </Header>
         
            </div>
            <AddingCard></AddingCard>



             </div >
        );
    }

}