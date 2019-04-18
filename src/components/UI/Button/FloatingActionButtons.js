import React from "react";
/* import PropTypes from 'prop-types'; */
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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

const FloatingActionButtons = props => {
  const { classes, onDelete, onEdit } = props;
  console.log(props);
  return (
    <div className={classes.container}>
      <Fab
        color="secondary"
        aria-label="Edit"
        onClick={onEdit}
        className={classes.fab}
      >
        <EditIcon />
      </Fab>
      <Fab
        aria-label="Delete"
        aria-label="Delete"
        onClick={onDelete}
        className={classes.fab}
      >
        <DeleteIcon onClick={onDelete} />
      </Fab>
    </div>
  );
};
export default withStyles(styles)(FloatingActionButtons);
