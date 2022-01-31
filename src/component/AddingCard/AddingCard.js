
import React from "react";
import { CustomInput } from "../../lib/Input/CustomInput";
import { CustomButton } from "../../lib/Button/CustomButton";
import './AddingCard.css';

export class AddingCard extends React.Component {
    render() {
        return <>
            <div className="addingCard-main-container">
                <div className="">
                    <div className="">
                        <CustomInput placeholder='List Name'></CustomInput>
                    </div>
                    <div className="">
                        <CustomButton>Add</CustomButton>
                        <CustomButton>Cancel</CustomButton>
                    </div>
                </div>
            </div>
        </>
    }
}