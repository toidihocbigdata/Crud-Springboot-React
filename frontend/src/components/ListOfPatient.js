import React, { Component } from "react";
import PatientDataService from "../services/PatientDataService";
import { DataGrid } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class ListOfPatientComponent extends Component {
  constructor(props) {
    super(props);
    this.refreshPatient = this.refreshPatient.bind(this);
  }
  
  componentDidMount() {
    this.refreshPatient();
  }

  refreshPatient() {
    PatientDataService.retrieveAllPatient().then((response) => {
      console.log(response);
      this.setState({ patients: response.data });
    });
  }

  render()
  {
    if (this.state)
    {   
        const Header = [
            {     
              field: "patient_id", 
              headerName: "patient id", 
              type: "number",
              width: 150,
            },
            { 
                field: "name", 
                headerName: "name", 
                width: 150,
            },
            {
              field: "age",
              headerName: "age",
              type: "number",
              width: 90,
            },
            {
              field: "gender",
              headerName: "gender",
              width: 100,
            },
            {
                field: "email",
                headerName: "email",
                width: 200,
            },
            {
                field: "phone_number",
                headerName: "phone number",
                width: 150,
            },
            {
                field:"created_at",
                headerName: "created at",
                width: 250,
            },
            {
                field:"updated_at",
                headerName: "updated at",
                width: 250,
            },
            {
                field:"button",
                headerName: "Options",
                width: 200,
                renderCell: (params) => (
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button onClick = { () => this.props.editAction( params.value )}>Edit</Button>
                    <Button onClick = { () => this.props.deleteAction( params.value )}>Delete</Button>
                    </ButtonGroup>
                ),
            },
          ];
          
        let rows = this.state.patients;

        rows.forEach(function (element) {
            element.id = element["patient_id"];
            element.button = element["patient_id"];
          });

        return(
            <div style={{ height: 400, width: '100%' , textAlign: "center"} }>
                <h2> List of Patients</h2>
                <DataGrid rows={rows} columns={Header} pageSize={5} />
            </div>
        )
    }
    else
    {
        return(
            <div> No data</div>
        )
    }
  }
}

export default ListOfPatientComponent;
