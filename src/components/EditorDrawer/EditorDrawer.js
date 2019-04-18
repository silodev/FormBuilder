import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { renderFieldEditor } from "../../helpers/renderFieldEditor";

const styles = {
  list: {
    width: 250
  },
  drawer: {
    width: 350
  },
  fullList: {
    width: "auto"
  }
};

class EditorDrawer extends React.Component {
  toggleDrawer = () => () => {
    this.props.deselectElement();
  };
  render() {
    const { selectedElement, closeEditor, classes, editorOpen } = this.props;
    /* const { id, settingsComponent, state } = selectedElement && selectedElement; */
    return (
      <div>
        <Drawer
          anchor="right"
          open={editorOpen}
          className={classes.drawer}
          hideBackdrop={true}
        >
          <button onClick={() => closeEditor()}>CLOSE</button>
          <div tabIndex={0} role="button" className={classes.drawer}>
            {selectedElement &&
              renderFieldEditor(
                selectedElement.settingsComponent,
                selectedElement.id,
                selectedElement.state
              )}
          </div>
        </Drawer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedElement, editorOpen } = state.formBuilder;
  return {
    selectedElement,
    editorOpen
  };
}
const mapDispatchToProps = dispatch => {
  return {
    editElement: (id, state) =>
      dispatch({ type: "EDIT_ELEMENT", id: id, state: state }),
    closeEditor: () => dispatch({ type: "CLOSE_EDITOR" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditorDrawer));
