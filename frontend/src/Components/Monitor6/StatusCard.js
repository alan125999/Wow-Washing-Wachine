import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    display: 'flex',
    marginTop: '20px',
    marginBottom: '20px',
    height: 100,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    flex: '1 0 auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progress: {
    margin: theme.spacing.unit * 3,
  },
});

class StatusCard extends React.Component {
  constructor(props){
    super(props);
    this.classes = this.props.classes;
    this.theme = this.props.theme;
    this.total = this.props.total;
  }
  // componentDidMount() {
  //   this.timer = setInterval(this.progress, 500);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  // }

  // progress = () => {
  //   const { completed } = this.state;
  //   this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  // };
  render(){
    const completed = (parseInt(this.props.vacant) / this.props.total)*100;
    return ( 
      <Card className={this.classes.card}>
        <Grid container spacing={24}>
          <Grid item xs={6} className={this.classes.details}>
            <CardContent className={this.classes.content} style={{paddingBottom: '16px'}}>
              <Typography variant="h5" >
                {this.props.name}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={6} className={this.classes.details}>
            <CardContent className={this.classes.content} style={{paddingBottom: '16px'}}>
              <Typography variant="h5" >
                {(this.props.state)? '運轉':'靜止'} 
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    );
  }
}

StatusCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(StatusCard);