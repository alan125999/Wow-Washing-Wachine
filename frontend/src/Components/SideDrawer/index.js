import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import HomeIcon from '@material-ui/icons/Home';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import { Link } from 'react-router-dom';
import placeData from '../../placeData';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  link: {
    textDecoration: 'none',
  }
});

class ResponsiveDrawer extends React.Component {
  render() {
    const { classes, theme } = this.props;
    const underData = [];
    const graduateData = [];
    placeData.forEach((data, index) => {
      if(data.type === 'under') 
      underData.push(
        <Link to={`/${data.id}`} className={classes.link} key={data.id} onClick={this.props.handleDrawerListItemClicked}>
          <ListItem button >
            <ListItemIcon><FilterDramaIcon /></ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItem>
        </Link>
      );
      else graduateData.push(
        <Link to={`/${data.id}`} className={classes.link} key={data.id} onClick={this.props.handleDrawerListItemClicked}>
          <ListItem button >
            <ListItemIcon><AcUnitIcon /></ListItemIcon>
            <ListItemText primary={data.name} />
          </ListItem>
        </Link>
      );
    });
    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
          <Link to="/" className={classes.link} key='dashboard' onClick={this.props.handleDrawerListItemClicked}>
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary="整體狀態" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {underData}
        </List>
        <Divider />
        <List>
          {graduateData}
        </List>
      </div>
    );

    return (
      <nav className={classes.drawer}>
        {/* The implementation can be swap with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={this.props.container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.props.mobileOpen}
            onClose={this.props.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);