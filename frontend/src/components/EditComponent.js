import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
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

class EditComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Done: -1,
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
    this.refreshInfo = this.refreshInfo.bind(this);
    this.handleSure = this.handleSure.bind(this);
  }

  componentDidMount() {
    this.refreshInfo();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    let temp = this.state;
    temp.Done = 1;
    console.log("submit");
    this.setState(temp);
  };

  handleSure = (evt) => {
    evt.preventDefault();
    console.log("sureee!")
    let data = this.state.TempPatient;
    data["updated_at"] = new Date().toUTCString();
    console.log(data);
    PatientDataService.updatePatientById(this.props.id, data).then(
      this.setState({ Done: 2 })
    );
  };

  handleBack = (evt) => {
    evt.preventDefault();
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

  refreshInfo = () => {
    PatientDataService.retrievePatientById(this.props.id).then((response) => {
      this.setState({ Done: 0, TempPatient: response.data });
    });
  };

  render() {
    const { classes } = this.props;
    switch (this.state.Done) {
      case 0:
        return (
          <div className={classes.root}>
            <h2> Edit Patient ID : {this.props.id}</h2>
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
              defaultValue={this.state.TempPatient.gender}
              className={classes.textField}
              onChange={this.handleInput}
            />
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
              onClick={this.handleSubmit}
              variant="contained"
              className={classes.button}
              color="primary"
            >
              Submit
            </Button>
          </div>
        );
      case 1:
        return (
          <div>
            <h2> New patient info</h2>
            <div>
              {Object.keys(this.state.TempPatient).map((val, key) => {
                return (
                  <p key={key}>
                    {val} : {this.state.TempPatient[val]}
                  </p>
                );
              })}

            </div>
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
      case 2:
        return <div> Edit successfully</div>;
      default:
        return <div> Loading </div>;
    }
  }
}

export default withStyles(useStyles)(EditComponent);
