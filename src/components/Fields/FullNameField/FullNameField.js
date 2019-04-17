import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

class FullNameField extends React.Component {
  state = {};

  componentDidMount() {
    const { editable, id, state } = this.props;
    console.log(state);
    this.setState({ ...state, id: id, editable: editable });
  }
  //USER LODASH INSTEAD
  handleChange = e => {
    const { id } = this.state;
    console.log(e);
    const { editElement } = this.props;
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => editElement(id, this.state));
  };
  handleInputChange = e => {
    const { id } = this.state;
    const { editElement } = this.props;
    const { name, value } = e.target;
    this.setState({ values: { ...this.state.values, [name]: value } }, () =>
      editElement(id, this.state)
    );
  };

  handleStyleChange = e => {
    const { id } = this.state;
    const { editElement } = this.props;
    const { name, value } = e.target;
    console.log(value);
    this.setState({ style: { ...this.state.style, [name]: value } }, () =>
      editElement(id, this.state)
    );
  };

  handleFullStyleChange = e => {
    const { id } = this.state;
    const { editElement } = this.props;
    const { name, value } = e.target;
    console.log(value);
    this.setState({ style: JSON.parse(value) }, () =>
      editElement(id, this.state)
    );
  };

  render() {
    const {
      values,
      firstnameLabel,
      lastnameLabel,
      fieldLabel,
      editable,
      style,
      id
    } = this.state;
    const { selectElement } = this.props;
    return (
      <Paper>
        {style && editable ? (
          <div style={{ backgroundColor: "#222", padding: "15px" }}>
            <input
              placeholder="textcolor"
              name="color"
              value={style.color}
              onChange={this.handleStyleChange}
            />
            <input
              placeholder="padding"
              name="padding"
              /*       type="number" */
              value={style.padding}
              onChange={this.handleStyleChange}
            />
            <br />
            <input
              name="firstnameLabel"
              value={firstnameLabel}
              onChange={this.handleChange}
            />
            <input
              name="lastnameLabel"
              value={lastnameLabel}
              onChange={this.handleChange}
            />
            <input
              name="fieldLabel"
              value={fieldLabel}
              onChange={this.handleChange}
            />
            />
          </div>
        ) : null}
        <hr />
        <div
          style={{ padding: style && style.padding }}
          onClick={() => editable && selectElement(id)}
        >
          <h2 >{fieldLabel}</h2>
          <hr />
          <label>{firstnameLabel}</label>
          <input
            name="firstname"
            onChange={this.handleInputChange}
            value={values ? values.firstname : ""}
          />
          <br />
          <label>{lastnameLabel}</label>
          <input
            name="lastname"
            onChange={this.handleChange}
            value={values ? values.lastname : ""}
          />
        </div>
      </Paper>
    );
  }
}

function mapStateToProps(state) {
  const { elements } = state.formBuilder;
  console.log(state);
  return {
    elements
  };
}

const mapDispatchToProps = dispatch => {
  return {
    editElement: (id, state) =>
      dispatch({ type: "EDIT_ELEMENT", id: id, state: state }),
    selectElement: id => dispatch({ type: "SELECT_ELEMENT", id: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullNameField);
