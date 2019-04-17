import React from "react";

import ContentArea from "../../components/ContentArea/ContentArea";
import ContentSideDrawer from "../../components/ContentSideDrawer/ContentSideDrawer";
import SettingsSideDrawer from "../../components/SettingsSideDrawer/SettingsSideDrawer";

class FormBuilder extends React.Component {
  render() {
    return (
      <div>
        <ContentSideDrawer />
        <SettingsSideDrawer />
        <ContentArea />
      </div>
    );
  }
}

export default FormBuilder;
