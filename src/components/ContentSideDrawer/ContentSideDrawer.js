import React from "react";
import { connect } from "react-redux";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { fieldConstants } from "../../constants/field.constants";

import {
  fullNameFieldState,
  TextFieldState,
  linkButtonState
} from "../../states/field.state";
import { blockConstants } from "../../constants/block.constants";
import { fieldSettingsConstants } from "../../constants/field.settings.contants";

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,

    fontSize: "1.8vh"
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: "rgba(255, 255, 255, 0.7)"
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: 16,
    paddingBottom: 16
  },
  plaudit: {
    fontSize: "3vh !important",
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white
  },
  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  itemPrimary: {
    color: "inherit",
    fontSize: theme.typography.fontSize,
    "&$textDense": {
      fontSize: theme.typography.fontSize
    }
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2
  }
});

class ContentSideDrawer extends React.Component {
  render() {
    const { classes, addElement, saveForm } = this.props;
    return (
      <Drawer variant="permanent" anchor="left" style={{ width: "200px" }}>
        <ListItem className={classes.categoryHeader}>
          <ListItemText>Modules</ListItemText>
        </ListItem>
        <button onClick={saveForm}>Save Form</button>
        FIELDS
        <ListItem
          button
          dense
          key={1}
          onClick={() =>
            addElement(
              fieldConstants.FULL_NAME_FIELD,
              fullNameFieldState,
              fieldSettingsConstants.FULL_NAME_FIELD_SETTINGS
            )
          }
          className={classNames(
            classes.item,
            classes.itemActionable,
            true && classes.itemActiveItem
          )}
        >
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
              textDense: classes.textDense
            }}
          >
            {"FullNameButton"}
          </ListItemText>
        </ListItem>
        <ListItem
          button
          dense
          key={1}
          onClick={() => addElement(fieldConstants.TEXT_FIELD, TextFieldState)}
          className={classNames(
            classes.item,
            classes.itemActionable,
            true && classes.itemActiveItem
          )}
        >
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
              textDense: classes.textDense
            }}
          >
            Text
          </ListItemText>
        </ListItem>
        <ListItem
          button
          dense
          key={3}
          onClick={() =>
            addElement(fieldConstants.LINK_BUTTON, linkButtonState)
          }
          className={classNames(
            classes.item,
            classes.itemActionable,
            true && classes.itemActiveItem
          )}
        >
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
              textDense: classes.textDense
            }}
          >
            Link button
          </ListItemText>
        </ListItem>
        BLOCKS
        <ListItem
          button
          dense
          key={2}
          onClick={() => addElement(blockConstants.SINGLE_COLUMN)}
          className={classNames(
            classes.item,
            classes.itemActionable,
            true && classes.itemActiveItem
          )}
        >
          <ListItemText
            classes={{
              primary: classes.itemPrimary,
              textDense: classes.textDense
            }}
          >
            {"Single column"}
          </ListItemText>
        </ListItem>
        <Divider className={classes.divider} />
      </Drawer>
    );
  }
}
/*
Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
}; */

const mapStateToProps = state => {
  const { elements } = state.formBuilder;
  console.log(state);
  return {
    elements
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addElement: (fieldType, state, fieldSettingsType) =>
      dispatch({
        type: "ADD_ELEMENT",
        fieldType: fieldType,
        state: state,
        fieldSettingsType: fieldSettingsType
      }),
    addBlock: blockType =>
      dispatch({ type: "ADD_BLOCK", blockType: blockType }),
    saveForm: () => dispatch({ type: "SAVE_FORM" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ContentSideDrawer));
