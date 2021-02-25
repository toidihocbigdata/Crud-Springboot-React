import React, { Component } from "react";
import { Button, TextField, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PatientDataService from "../services/PatientDataService";
const useStyles = (theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 400,
  },
});

class AddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Done: 0,
      TempPatient: {
        name: "",
        gender: "",
        age: "",
        phone_number: "",
        email: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSure = this.handleSure.bind(this);
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    let temp = this.state;
    temp.Done = 1;
    this.setState(temp);
  };

  handleSure = (evt) => {
    evt.preventDefault();
    let data = this.state.TempPatient;
    data["created_at"] = new Date().toUTCString();
    data["updated_at"] = new Date().toUTCString();
    PatientDataService.createPatient(data).then(this.setState({ Done: 2 }));
  };

  handleBack = (evt) => {
    evt.preventDefault();
    console.log("AKI");
    let temp = this.state;
    temp.Done = 0;
    this.setState(temp);
  };

  handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    let temp = this.state;
    temp.TempPatient[name] = newValue;
    this.setState(temp);
  };

  render() {
    const { classes } = this.props;
    switch (this.state.Done) {
      case 0:
        return (
          <div className={classes.root}>
            <h2> Add new patient</h2>
            {/* <form onSubmit={this.handleSubmit}> */}
            <TextField
              label="Name"
              name="name"
              defaultValue={this.state.TempPatient.name}
              className={classes.textField}
              onChange={this.handleInput}
            />
            <br />
            <TextField
              label="Gender"
              name="gender"
            //   defaultValue="Male"
              className={classes.textField}
              onChange={this.handleInput}
              select
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </TextField>
            <br />
            <TextField
              label="Age"
              name="age"
              defaultValue={this.state.TempPatient.age}
              className={classes.textField}
              onChange={this.handleInput}
            />
            <br />
            <TextField
              label="Phone Number"
              name="phone_number"
              defaultValue={this.state.TempPatient.phone_number}
              className={classes.textField}
              onChange={this.handleInput}
            />
            <br />
            <TextField
              label="Email"
              name="email"
              defaultValue={this.state.TempPatient.email}
              className={classes.textField}
              onChange={this.handleInput}
            />
            <br />
            <Button
              //   type="submit"
              onClick={this.handleSubmit}
              variant="contained"
              className={classes.button}
              color="primary"
            >
              Submit
            </Button>
            {/* </form> */}
          </div>
        );
        break;
      case 1:
        return (
          <div>
            <h2> New patient info</h2>
            {Object.keys(this.state.TempPatient).map((a) => (
              <p>
                {a} : {this.state.TempPatient[a]}
              </p>
            ))}
            <p> Are you sure?</p>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={this.handleBack}
            >
              No
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              color="primary"
              onClick={this.handleSure}
            >
              Sure
            </Button>
          </div>
        );
        break;
      default:
        return <div> add success, click homepage to return</div>;
    }
  }
}

export default withStyles(useStyles)(AddComponent);
