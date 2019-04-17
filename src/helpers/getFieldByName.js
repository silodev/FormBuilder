import React from "react";

import { fieldConstants } from "../constants/field.constants";

import FullNameField from "../components/Fields/FullNameField/FullNameField";
import TextField from "../components/Fields/TextField/TextField";
import LinkButton from "../components/Fields/LinkButton/LinkButton";

export const getFieldByName = (type, id, state, editable) => {
  switch (type) {
    case fieldConstants.FULL_NAME_FIELD:
      return <FullNameField id={id} state={state} editable={editable} />;
    case fieldConstants.TEXT_FIELD:
      return <TextField id={id} state={state} editable={editable} />;
    case fieldConstants.LINK_BUTTON:
      return <LinkButton id={id} state={state} editable={editable} />;
    default:
      return {};
  }
};
