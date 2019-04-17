import React from "react";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";
import { Col, Row, Container } from "reactstrap";

import { getFieldByName } from "../../helpers/getFieldByName";

import { fieldConstants } from "../../constants/field.constants";
import { fullNameFieldState } from "../../states/field.state";

class SingleColumn extends React.Component {
  state = {};
  componentDidMount() {
    const { editable, id, state, content } = this.props;
    console.log(state);
    this.setState({ ...state, id: id, editable: editable, content: content });
  }
  componentWillReceiveProps() {
    console.log(this.props);
    const { content } = this.props.elements.map(e => e.id === this.state.id);
    this.setState({ content: content });
  }
  render() {
    const { content, id } = this.state;
    const { addElementToBlock } = this.props;
    console.log(content);
    return (
      <Container>
        <Droppable droppableId={id}>
          {(provided) => <Row style={{ height: "100px" }} {...provided.droppableProps}></Row>}
        </Droppable>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { elements } = state.formBuilder;
  console.log(state);
  return {
    elements
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addElement: (fieldType, state) =>
      dispatch({ type: "ADD_ELEMENT", fieldType: fieldType, state: state }),
    addElementToBlock: (id, fieldType, state) =>
      dispatch({
        type: "ADD_ELEMENT_TO_BLOCK",
        id: id,
        fieldType: fieldType,
        state: state
      }),
    saveForm: () => dispatch({ type: "SAVE_FORM" })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleColumn);
{
  /*   <Col>
 {!content ? (
   <button
     onClick={() =>
       addElementToBlock(
         id,
         fieldConstants.FULL_NAME_FIELD,
         fullNameField
       )
     }
   >
     ADD CONTENT
   </button>
 ) : (
   getFieldByName(content.component, content.id, content.state, true)
 )}
</Col> */
}
