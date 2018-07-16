import { Submission } from '../Submission';
import { Action } from '@ngrx/store';

export enum FormActionTypes {
  UpdateScehma = 'UpdateScehma',
  DeleteComponenetFromScehma = 'DeleteComponenetFromScehma',
  CreateSubmission = 'CreateSubmission',
  SetCurrentSubmission = 'SetCurrentSubmission',
}
// Action Creators
export class UpdateScehma implements Action {
  readonly type = FormActionTypes.UpdateScehma;
  constructor(public payload) { }
}
export class DeleteComponenetFromScehma implements Action {
  readonly type = FormActionTypes.DeleteComponenetFromScehma;
  constructor(public payload) { }
}
export class CreateSubmission implements Action {
  readonly type = FormActionTypes.CreateSubmission;
  constructor(public payload) { }
}
export class SetCurrentSubmission implements Action {
  readonly type = FormActionTypes.SetCurrentSubmission;
  constructor(public payload) { }
}

// Union the valid types
export type FormActions =   UpdateScehma
| DeleteComponenetFromScehma
| CreateSubmission
| SetCurrentSubmission;

