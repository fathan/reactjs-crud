import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import { Switch, Route, Redirect } from "react-router-dom";

// SHAREDS
import Menu from '../../components/Menu/Menu';

// DASHBOARD
import Dashboard from "../../views/Dashboard/Dashboard";

// BLOG
import BlogIndex from "../../views/Blog/BlogIndex";
import BlogNew from "../../views/Blog/BlogNew";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Full(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Menu/>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Switch>
            <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
            <Route path="/blog" name="Blog Index" component={BlogIndex}/>
            <Route path="/blog-new" name="Blog New" component={BlogNew}/>
            <Redirect from="/" to="/dashboard"/>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

Full.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Full);