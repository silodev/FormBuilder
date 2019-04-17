import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

class TextField extends React.Component {
  state = {};

  componentDidMount() {
    const { editable, id, state } = this.props;
    console.log(state);
    this.setState({ ...state, id: id, editable: editable });
  }
  handleChange = e => {
    const { id } = this.state;
    console.log(e);
    const { editElement } = this.props;
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => editElement(id, this.state));
  };

  render() {
    const { text, editable, style, id } = this.state;
    const { selectElement } = this.props;
    return (
      <Paper >
        {style && editable ? (
          <div style={{ backgroundColor: "#222", padding: 4 }}>
            <textarea
              placeholder=""
              name="text"
              value={text}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
        <hr />
        <div onClick={() => editable && selectElement(id)}>
          <p>{text}</p>
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
)(TextField);
