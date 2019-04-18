import React from "react";
import { connect } from "react-redux";

import ReactDragList from "react-drag-list";
import FloatingActionButtons from "../UI/Button/FloatingActionButtons";
import { Row, Col } from "reactstrap";

import { renderField } from "../../helpers/renderField";

import "react-drag-list/assets/index.css";
import { Paper } from "@material-ui/core";

class ContentArea extends React.Component {
  state = {
    loaded: false
  };
  componentWillReceiveProps() {
    this.setState({ loaded: true });
    console.log(this.props);
  }
  handleContentOrderChange(event, dataSource) {
    console.log(dataSource);
    const { contentOrderChanged } = this.props;
    contentOrderChanged(dataSource);
  }
  render() {
    const { elements, selectedElement, openEditor, removeElement } = this.props;
    return (
      <div>
        <div
          style={{
            width: "50%",
            marginLeft: "30%",
            backgroundColor: "#222",
            color: "#eee"
          }}
        >
          {elements && JSON.stringify(elements)}
        </div>
        <br />
        <div style={{ width: "50%", marginLeft: "23%" }}>
          {elements !== undefined ? (
            <ReactDragList
              animation={10}
              dataSource={elements}
              rowKey={"id"}
              className="simple-drag"
              rowClassName="simple-drag-row"
              handles={false}
              onUpdate={(event, dataSource) =>
                this.handleContentOrderChange(event, dataSource)
              }
              row={(el, index) => {
                return (
                  <React.Fragment>
                    <Row style={{ width: "100%", display: "inline-flex" }}>
                      <Col
                        style={{
                          maxWidth: "90%"
                        }}
                      >
                        <Paper
                          style={{
                            border:
                              selectedElement && el.id === selectedElement.id
                                ? "2px solid #5593dc94"
                                : null
                          }}
                        >
                          {renderField(el.component, el.id, el.state, true)}
                        </Paper>
                      </Col>
                      <Col style={{ maxWidth: "10%" }}>
                        {selectedElement && el.id === selectedElement.id && (
                          <FloatingActionButtons
                            onEdit={openEditor}
                            onDelete={() => removeElement(el.id)}
                          />
                        )}
                      </Col>
                    </Row>
                  </React.Fragment>
                );
              }}
            />
          ) : null}
        </div>
      </div>
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
    contentOrderChanged: elements =>
      dispatch({ type: "CONTENT_ORDER_CHANGED", elements: elements }),
    openEditor: () => dispatch({ type: "OPEN_EDITOR" }),
    removeElement: id => dispatch({ type: "REMOVE_ELEMENT", id: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentArea);
