import React, { Component } from "react";
import "./ListOfPatient";
import ListOfPatientComponent from "./ListOfPatient";
import DeleteComponent from "./DeleteComponent";
import EditComponent from "./EditComponent";
import AddComponent from "./AddComponent";
import Button from "@material-ui/core/Button";
// import PatientDataService from "../services/PatientDataService"
const HOMEPAGE = "Homepage";
const ADD = "Create a patient";
const EDIT = "Edit a patient";
const DELETE = "Delete a patient";

class InstructorApp extends Component {
  constructor(props) {
    super(props);
    this.state = { mainState: HOMEPAGE };
    this.editAction = this.editAction.bind(this)
    this.deleteAction = this.deleteAction.bind(this)
  }

  editAction(id)
  {
      this.setState({mainState: EDIT, tempID: id});
      
  }

  deleteAction(id)
  {
      this.setState({mainState: DELETE, tempID: id});
      
  }

  render() {
    var Body;
    // console.log(this.state.mainState);
    switch (this.state.mainState) {
      case ADD:
        Body = <AddComponent strr="hello"/>;
        break;
      case EDIT:
        Body = <EditComponent id = {this.state.tempID}/>;
        break;
      case DELETE:
        Body = <DeleteComponent id = {this.state.tempID} />;
        break;
      default:
        Body = <ListOfPatientComponent editAction={this.editAction} deleteAction={this.deleteAction}/>;
        break;
    }
    return (
      <>
        <h1> Vinbrain </h1>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.setState({ mainState: HOMEPAGE });
          }}
        >
          Home Page
        </Button>
        <> </>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.setState({ mainState: ADD });
          }}
        >
          Create New
        </Button>
        <div>{Body}</div>
      </>
    );
  }
}
export default InstructorApp;
