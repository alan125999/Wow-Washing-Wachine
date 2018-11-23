import React, { Component } from 'react';
import {Route, BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
import theme from './Components/theme';
import Dashboard from './Components/Dashboard';
import Main from './Components/Main'
import Monitor from './Components/Monitor';
import Monitor2 from './Components/Monitor2';
import Monitor3 from './Components/Monitor3';
import Monitor4 from './Components/Monitor4';
import Monitor5 from './Components/Monitor5';
import Monitor6 from './Components/Monitor6';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <Main>
            <Route path="/" component={Dashboard} exact />
            <Route path="/u_ab1" component={Monitor}/>
            <Route path="/u_cb1" component={Monitor2}/>
            <Route path="/c_de" component={Monitor3}/>
            <Route path="/g_OIA" component={Monitor4}/>
            <Route path="/g_A3" component={Monitor5}/>
            <Route path="/GB3F" component={Monitor6}/>
          </Main>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default withStyles(styles)(App);
