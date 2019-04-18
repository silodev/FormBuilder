import React from "react";
import { fieldSettingsConstants } from "../constants/field.settings.contants";
import FullNameFieldEditor from "../components/Fields/FullNameField/FullNameFieldEditor";

export const renderFieldEditor = (type, id, state) => {
  switch (type) {
    case fieldSettingsConstants.FULL_NAME_FIELD_SETTINGS:
      return <FullNameFieldEditor id={id} state={state} />;
    /*     case fieldConstants.TEXT_FIELD:
      return <TextField id={id} state={state} editable={editable} />;
    case fieldConstants.LINK_BUTTON:
      return <LinkButton id={id} state={state} editable={editable} />; */
    default:
      return {};
  }
};
