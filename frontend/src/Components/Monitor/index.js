import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StatusCard from './StatusCard';
import Grid from '@material-ui/core/Grid';
import placeData from '../../placeData';
import { Redirect } from 'react-router-dom';
import { Router, Route, BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  paper: {
    paddingTop: 20,
    paddingBottom: 20,
  }
})

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.classes = this.props.classes;
    this.state = {
      machines: [],
    }
  }
  componentDidMount(){
    var params = new URLSearchParams();
    params.append('location', 'u_ab1');
    const uri = process.env.REACT_APP_API_PATH + '/fetchDB.php';
    axios.post(uri, params)
    .then((response) => {
      if(response.data.status == 'success'){
        this.setState({
          machines: response.data.data,
        })
      }
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }
  render() {
    const match = 'u_ab1';
    const place = placeData.find((data) => data.id === match);
    const cards = this.state.machines.map(data => <StatusCard name={place.name + ' #' + data.id} />);
    if(place == null) return <Redirect to='/'/>
    return (
      <div className={this.classes.paper}>
        <Typography variant='h4' align='center' gutterBottom>{place.name}</Typography>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item xs={10} >
            {cards}
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);