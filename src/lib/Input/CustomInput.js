/* eslint-disable no-useless-constructor */
import React from "react";

export class CustomInput extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return <>
            <input type={this.props.type} ></input>
        </>
    }

}