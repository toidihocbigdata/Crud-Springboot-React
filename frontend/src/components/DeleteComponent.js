import { Button } from "@material-ui/core";
import React, { Component } from "react";
import PatientDataService from "../services/PatientDataService";


class DeleteComponent extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {Done:false};
        this.sureCick = this.sureCick.bind(this);
    };

    sureCick(id)
    {
        PatientDataService.deletePatientById(id);
        this.setState({Done:true});
    }

    render()
    {
        if (this.state.Done)
        {
            return(
                <>
                    <h2>You have been deteted patient ID : {this.props.id} </h2>
                    <p> Click Home Page to return</p>
                </>
            );
        }
        else{
        return(
            <> 
                <h2>Delete Patient</h2> 
                <p> You are going delete patient with ID: {this.props.id}</p>
                <p> Are you sure?</p>
                <Button variant="contained" color="primary" onClick={() => this.sureCick(this.props.id)}> OK </Button>
            </>
            );
        }
    }
}

export default DeleteComponent;