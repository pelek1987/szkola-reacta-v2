import { useReducer } from "react";
import { formStateReducer, initialState } from "./formStateReducer";

export const MultiStepForm = () => {
  const [formState, dispatch] = useReducer(formStateReducer, initialState);
  return <div></div>;
};
