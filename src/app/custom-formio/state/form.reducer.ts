import { Submission } from '../Submission';
import { FormActionTypes, FormActions } from './form.actions';

export interface FormState {
  formSchema: any;
  getCurrentSubmissionId: number;
  submissions: any;
  error: string;
}


const initialState: FormState = {
  formSchema: {},
  getCurrentSubmissionId: null,
  submissions: [],
  error: ''
};



export function reducer(state = initialState, action: FormActions): FormState {
  switch (action.type) {
    case FormActionTypes.UpdateScehma:
      return {
        ...state,
        submissions: [],
        formSchema: action.payload
      };
    case FormActionTypes.DeleteComponenetFromScehma:
      const componenets = state.formSchema.components
                      .filter(componenet => componenet.id !== action.payload);
      const newElt = Object.assign({}, state.formSchema, {'components': componenets});
      return {
        ...state,
        submissions: [],
        formSchema: newElt
      };
      case FormActionTypes.LoadSchema:
      return {
        ...state,
        error: action.payload
      };
    case FormActionTypes.CreateSubmission:
    state.submissions.push(action.payload);
      return {
        ...state
      };
    case FormActionTypes.SetCurrentSubmission:
      return {
        ...state,
        getCurrentSubmissionId: action.payload.id
      };
      default:
      return state;
  }
}

 //







