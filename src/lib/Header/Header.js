import React from "react";
import { CustomInput } from "../Input/CustomInput";
import './Header.css';

export class Header extends React.Component {
    render() {
        return <>
            <div className="main-container">
                <div className="container">

                    <div className="brandName-container">
                        {this.props.brandName}
                    </div>
                    <div className="search-container">
                        <CustomInput placeholder='Search'></CustomInput>
                    </div>

                </div>


            </div>
        </>
    }
}