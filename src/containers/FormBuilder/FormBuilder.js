import React from "react";

import ContentArea from "../../components/ContentArea/ContentArea";
import ContentSideDrawer from "../../components/ContentSideDrawer/ContentSideDrawer";
import EditorDrawer from "../../components/EditorDrawer/EditorDrawer";

class FormBuilder extends React.Component {
  render() {
    return (
      <div>
        <ContentSideDrawer />
        <EditorDrawer />
        <ContentArea />
      </div>
    );
  }
}

export default FormBuilder;
