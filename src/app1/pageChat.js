import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import MyAppBar from './myAppBar';
import MyChatMessage from './myChatMessage'

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

const styles = theme => ({
  root:
  {
      /*marginTop: theme.spacing.unit * 3,*/
      /*padding: theme.spacing.unit * 3,*/
      border: '2px solid #FF9800',
      //position: 'relative',
      //display: 'flex',
      width: '100%',
      height: '100%',
      //overflow: 'auto'  ,

  },
  container:
  {
    border: '1px solid #FF0000',    
    height: '80%',
  },
  textedit:
  {
    //position:'fixed',
    position: 'static',
    bottom: 0,
    left: 0,
    width:'100%',
    //border: '2px solid #FF9800',
    backgroundColor: '#FFFFFF',
  },
});

class pageChat extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MyAppBar title="Chatroom" />

        <GridList className={classes.container} cols={1} cellHeight='auto'>
          {[0,1,2,3,4,5,6,7,8,9,10].map((value, index) => (
            <GridListTile key={index} rows='12'>
            <MyChatMessage key={index} pseudo={`pseudo ${value}`} message={"message " + index} />
            </GridListTile>
          ))} 
         </GridList>

        <form noValidate autoComplete="off" className={classes.textedit}>
          <TextField
            id="name"
            label="Message"
            //onChange={this.handleChange}
            margin="normal"
          />
          <Tooltip title="Let's Go :) !" placement="bottom">
            <Button raised color="primary">OK</Button>
          </Tooltip>
        </form>
      </div>
    );
  }
}

pageChat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(pageChat);