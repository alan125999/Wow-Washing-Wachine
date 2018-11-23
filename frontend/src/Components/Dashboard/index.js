import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import StatusCard from './StatusCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import placeData from '../../placeData';
import { Router, Route, BrowserRouter, Link } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  paper: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  link: {
    textDecoration: 'none',
  },
})

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.classes = this.props.classes;
    this.state = {
      vacantNum: {
        'c-de': 0,
        'g-A3': 0,
        'g-OIA': 0,
        'u-ab1': 0,
        'u-cb1': 0,
        'GB3F' : 0,
      }
    }
  }
  componentDidMount(){
    const uri = process.env.REACT_APP_API_PATH + '/getVacantNum.php'
    console.log(uri);
    axios.get(uri)
    .then((response) => {
      if(response.data.status == 'success'){
        this.setState({
          vacantNum: response.data.data,
        })
      }
    })
    .catch(function (error) {
      console.log(error.response);
    });
  }
  render() {
    const cards = placeData.map((data, index) => (
      <Link to={`/${data.id}`} className={this.classes.link} key={`card_${data.id}`}>
        <StatusCard name={data.name} vacant={this.state.vacantNum[data.id]} total={data.amount}/>
      </Link>
    ));
    return (
      <div className={this.classes.paper}>
        <Typography variant='h4' align='center' gutterBottom>整體狀態</Typography>
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