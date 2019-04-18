import { fieldConstants } from "../constants/field.constants";

let id = -1;
export const newId = () => {
  return id--;
};

const initialState = {
  elements: [],
  selectedElement: null,
  editorOpen: false,
  snapshot: []
};

export const formBuilder = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ELEMENT":
      console.log(action);
      return {
        ...state,
        elements: [
          ...state.elements,
          {
            component: action.fieldType,
            id: newId(),
            state: action.state,
            settingsComponent: action.fieldSettingsType
          }
        ]
      };
    case "SELECT_ELEMENT":
      return {
        ...state,
        selectedElement: state.elements.find(e => e.id === action.id)
      };
    case "DESELECT_ELEMENT":
      return {
        ...state,
        selectedElement: null
      };

    case "EDIT_ELEMENT":
      return {
        ...state,
        elements: [
          ...state.elements.map(e =>
            e.id === action.id ? { ...e, state: action.state } : e
          )
        ],
      /*   selectedElement: {...state.selectedElement, state: action.state} */
      };
    case "OPEN_EDITOR":
      return {
        ...state,
        editorOpen: true
      };
    case "CLOSE_EDITOR":
      return {
        ...state,
        editorOpen: false
      };
    case "SAVE_FORM":
      return {
        ...state,
        elements: [
          ...state.elements.map(e => {
            return { ...e, state: { ...e.state, edible: false } };
          })
        ]
      };
    case "CONTENT_ORDER_CHANGED":
      return {
        ...state,
        elements: action.elements
      };
    case "REMOVE_ELEMENT":
      return {
        ...state,
        elements: [...state.elements.filter(e => e.id !== action.id)]
      };
    default:
      return state;
  }
};
