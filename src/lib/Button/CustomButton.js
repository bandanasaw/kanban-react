import React from "react";

export class CustomButton extends React.Component {

    render() {
        return <>
            <button type={this.props.type}>{this.props.name}</button>
        </>
    }
}