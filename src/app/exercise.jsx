import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const increase = () => {
  type: "INCREASE";
};
const decrease = () => {
  type: "DECREASE";
};
const changeText = () => {
  type: "CHANGE_TEXT", text;
};
const addToList = () => {
  type: "ADD_TO_LIST", item;
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREASE":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CHANGE_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "ADD_TO_LIST":
      return {
        ...state,
        text: state.list.concat(action.item),
      };

    default:
      throw new Error("error");
  }
}
