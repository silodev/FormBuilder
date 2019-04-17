import React from "react";
import { connect } from "react-redux";

import ReactDragList from "react-drag-list";
import FloatingActionButtons from "../UI/Button/FloatingActionButtons";
import { Row, Col } from "reactstrap";

import { getFieldByName } from "../../helpers/getFieldByName";

import "react-drag-list/assets/index.css";

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
    const { elements } = this.props;
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
        <div style={{ width: "50%", marginLeft: "30%" }}>
          {elements !== undefined ? (
            <ReactDragList
              animation={10}
              dataSource={elements}
              rowKey={"id"}
              className="simple-drag"
              rowClassName="simple-drag-row"
              onUpdate={(event, dataSource) =>
                this.handleContentOrderChange(event, dataSource)
              }
              row={(el, index) => {
                return (
                  <React.Fragment>
                    <Row style={{ /* width: "60%" */ display: "inline-flex" }}>
                      <div>
                        {getFieldByName(el.component, el.id, el.state, true)}
                      </div>
                      <FloatingActionButtons />
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
      dispatch({ type: "CONTENT_ORDER_CHANGED", elements: elements })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentArea);
