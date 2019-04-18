import React from "react";
import { connect } from "react-redux";
import ContentEditable from "react-contenteditable";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

class FullNameField extends React.Component {
  state = {};
  componentWillMount() {
    const { editable, id, state } = this.props;
    console.log(state);
    this.setState({ ...state, id: id, editable: editable });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.state !== this.props.state) {
      const { editable, id, state } = this.props;
      this.setState({ ...state, id: id, editable: editable });
    }
  }
  handleInputChange = e => {
    const { id } = this.state;
    const { editElement } = this.props;
    const { name, value } = e.target;
    this.setState({ values: { ...this.state.values, [name]: value } }, () =>
      editElement(id, this.state)
    );
  };
  handleContentChange = (e, name) => {
    console.log(e);
    const { id } = this.state;
    const { editElement } = this.props;
    this.setState({ [name]: e.target.value }, () =>
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
    console.log(this.props);
    return (
      <React.Fragment>
        <div
          style={{ padding: style && style.padding }}
          onClick={() => editable && selectElement(id)}
        >
          <ContentEditable
            style={{ textAlign: style && style.textAlign , margin: '5px', fontSize: style && style.fontSize}}
            innerRef={this.contentEditable}
            html={fieldLabel} // innerHTML of the editable div
            disabled={false} // use true to disable editing
            onChange={e => this.handleContentChange(e, "fieldLabel")} // handle innerHTML change
            tagName="h2" // Use a custom HTML tag (uses a div by default)
          />
          <hr />
          <InputGroup size="sm" style={{ width: "300px", margin: "auto" }}>
            <InputGroupAddon addonType="prepend">
              <ContentEditable
                style={{
                  minWidth: "100px",
                  marginRight: "5px",
                  padding: "10px"
                }}
                innerRef={this.contentEditable}
                html={firstnameLabel} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={e => this.handleContentChange(e, "firstnameLabel")} // handle innerHTML change
                tagName="label" // Use a custom HTML tag (uses a div by default)
              />
            </InputGroupAddon>
            <Input
              name="firstname"
              onChange={this.handleInputChange}
              value={values ? values.firstname : ""}
            />
          </InputGroup>
          <InputGroup size="sm" style={{ width: "300px", margin: "auto" }}>
            <InputGroupAddon addonType="prepend">
              <ContentEditable
                style={{
                  minWidth: "100px",
                  marginRight: "5px",
                  padding: "5px"
                }}
                innerRef={this.contentEditable}
                html={lastnameLabel} // innerHTML of the editable div
                disabled={false} // use true to disable editing
                onChange={e => this.handleContentChange(e, "lastnameLabel")} // handle innerHTML change
                tagName="label" // Use a custom HTML tag (uses a div by default)
              />
            </InputGroupAddon>
            <Input
              name="lastname"
              onChange={this.handleInputChange}
              value={values ? values.lastname : ""}
            />
          </InputGroup>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { elements, selectedElement } = state.formBuilder;
  console.log(state);
  return {
    elements,
    selectedElement
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
