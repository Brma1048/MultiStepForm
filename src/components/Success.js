import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // Process Form //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Success' />
          <h1>Thank's for the Submission</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
