import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const styles = {
  list: {
    width: 250
  },
  drawer:{
      width: 250
  },
  fullList: {
    width: "auto"
  }
};

class SettingsSideDrawe extends React.Component {
  toggleDrawer = () => () => {
    this.props.deselectElement();
  };
  render() {
    const { selectedElement, deselectElement, classes } = this.props;
    return (
      <div>
        <Drawer anchor="right" open={selectedElement} className={classes.drawer} >
          <button onClick={() => deselectElement()}>CLOSE</button>
          <div tabIndex={0} role="button" className={classes.drawer}>
            {selectedElement && selectedElement.id}
          </div>
          <div tabIndex={0} role="button" className={classes.drawer}>
            {selectedElement && selectedElement.id}
          </div>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedElement } = state.formBuilder;
  return {
    selectedElement
  };
}
const mapDispatchToProps = dispatch => {
  return {
    editElement: (id, state) =>
      dispatch({ type: "EDIT_ELEMENT", id: id, state: state }),
    deselectElement: () => dispatch({ type: "DESELECT_ELEMENT" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(SettingsSideDrawe));
