import React from "react";
import { connect } from "react-redux";
import { Input, ButtonGroup, Button } from "reactstrap";

class FullNameFieldEditor extends React.Component {
  state = {};
  componentDidMount() {
    const { id, state } = this.props;

    console.log(state, id);
    this.setState({ ...state, id: id });
  }
  handleStyleChange = (name, value) => {
    const { id } = this.state;
    const { editElement } = this.props;
    console.log(value);
    this.setState({ style: { ...this.state.style, [name]: value } }, () => {
      editElement(id, this.state);
    });
  };
  render() {
    const { style } = this.state;
    return (
      <React.Fragment>
        <div />
        <div style={{ padding: "10px" }}>
          <h5>Full Name Properties</h5>
          <div>
            <hr />
            <h6>Field background</h6>
            <hr />
            <Input
              value={style && style.fontSize}
              onChange={e => this.handleStyleChange("backroundColor", e.target.value)}
            />
            <hr />
            <h6>Label alignment</h6>
            <hr />
            <ButtonGroup size="sm">
              <Button
                color={style && style.textAlign === "left" && "success"}
                onClick={() => this.handleStyleChange("textAlign", "left")}
              >
                Left
              </Button>
              <Button
                color={style && style.textAlign === "center" && "success"}
                onClick={() => this.handleStyleChange("textAlign", "center")}
              >
                Center
              </Button>
              <Button
                color={style && style.textAlign === "right" && "success"}
                onClick={() => this.handleStyleChange("textAlign", "right")}
              >
                Right
              </Button>
            </ButtonGroup>
            <hr />
            <h6>Label size (px, vh etc.. )</h6>
            <hr />
            <Input
              value={style && style.fontSize}
              onChange={e => this.handleStyleChange("fontSize", e.target.value)}
            />
          </div>
        </div>
      </React.Fragment>
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
)(FullNameFieldEditor);
