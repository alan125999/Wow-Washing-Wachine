import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import DenseAppBar from '../DenseAppBar';
import SideDrawer from '../SideDrawer'


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

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this)
    this.handleDrawerListItemClicked = this.handleDrawerListItemClicked.bind(this)
    this.classes = this.props.classes;
  }
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleDrawerListItemClicked = () => {
    this.setState(state => ({ mobileOpen: false }));
  };

  render() {
    return (
      <div className={this.classes.root}>
        <CssBaseline />
        <DenseAppBar handleDrawerToggle={this.handleDrawerToggle} />
        <SideDrawer mobileOpen={this.state.mobileOpen} handleDrawerToggle={this.handleDrawerToggle} handleDrawerListItemClicked={this.handleDrawerListItemClicked}/>
        <main className={this.classes.content}>
          <div className={this.classes.toolbar} />
          <Grid container spacing={24}>
            <Grid item xs />
            <Grid item xs={12} sm={10} md={7}>
              {this.props.children}
            </Grid>
            <Grid item xs/>
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(Main);
