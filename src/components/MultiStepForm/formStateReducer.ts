export type FormValues = {
  firstName: string;
  lastName: string;
  birthDate: null | Date;
  hobby: string;
};

export type FormStepType = 1 | 2 | 3;

type FormStateType = {
  formData: FormValues;
  formStep: FormStepType;
};

export const initialState: FormStateType = {
  formData: {
    firstName: "",
    lastName: "",
    birthDate: null,
    hobby: "",
  },
  formStep: 1,
};

enum ActionTypeName {
  ADD_FIRST_NAME = "ADD_FIRST_NAME",
  ADD_LAST_NAME = "ADD_LAST_NAME",
  ADD_BIRTH_DATE = "ADD_BIRTH_DATE",
  ADD_HOBBY = "ADD_HOBBY",
  CHANGE_STEP = "CHANGE_STEP",
}
type ActionType =
  | {
      type:
        | ActionTypeName.ADD_FIRST_NAME
        | ActionTypeName.ADD_LAST_NAME
        | ActionTypeName.ADD_HOBBY;
      payload: string;
    }
  | {
      type: ActionTypeName.ADD_BIRTH_DATE;
      payload: Date;
    }
  | {
      type: ActionTypeName.CHANGE_STEP;
      payload: FormStepType;
    };

export const formStateReducer = (
  state: FormStateType,
  action: ActionType
): FormStateType => {
  switch (action.type) {
    case ActionTypeName.ADD_FIRST_NAME:
      return {
        formData: {
          ...state.formData,
          firstName: action.payload,
        },
        formStep: state.formStep,
      };
    case ActionTypeName.ADD_LAST_NAME:
      return {
        formData: {
          ...state.formData,
          lastName: action.payload,
        },
        formStep: state.formStep,
      };
    case ActionTypeName.ADD_HOBBY:
      return {
        formData: {
          ...state.formData,
          hobby: action.payload,
        },
        formStep: state.formStep,
      };
    case ActionTypeName.ADD_BIRTH_DATE:
      return {
        formData: {
          ...state.formData,
          birthDate: action.payload,
        },
        formStep: state.formStep,
      };
    case ActionTypeName.CHANGE_STEP:
      return {
        ...state,
        formStep: action.payload,
      };
  }
};
