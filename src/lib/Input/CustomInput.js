/* eslint-disable no-useless-constructor */
import React from "react";
import './CustomInput.css';


export class CustomInput extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return <>

            <input type={this.props.type} placeholder={this.props.placeholder} className={this.props.className}></input>
        </>

    }

}