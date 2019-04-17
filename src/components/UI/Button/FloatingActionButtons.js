import React from "react";
/* import PropTypes from 'prop-types'; */
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import NavigationIcon from "@material-ui/icons/Navigation";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  container: {
    display: "grid",
    height: "20%"
  }
});

function FloatingActionButtons(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Fab color="secondary" aria-label="Edit" className={classes.fab}>
        <EditIcon />
      </Fab>
      <Fab aria-label="Delete" aria-label="Delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
    </div>
  );
}
/* 
FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
}; */

export default withStyles(styles)(FloatingActionButtons);
