import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
 import * as fromForm from './form.reducer';
import { Submission } from '../Submission';

const getFormFeatureState = createFeatureSelector<fromForm.FormState>('form');

export const getFormSchema = createSelector(
  getFormFeatureState,
    state => state.formSchema
);

export const getCurrentSubmissionId = createSelector(
  getFormFeatureState,
    state => state.getCurrentSubmissionId
);

export const getCurrentSubmission = createSelector(
  getFormFeatureState,
  getCurrentSubmissionId,
    (state, currentSubmissionId): (Submission | null) => {
        if (currentSubmissionId === 0) {
            return {
                id: 0,
                submitDate: new Date(),
                formComponent: {}
            };
        } else {
            return currentSubmissionId ? state.submissions.find(s => s.id === currentSubmissionId) : null;
        }
    }
);

export const getSubmissions = createSelector(
  getFormFeatureState,
    state => state.submissions
);

export const getError = createSelector(
  getFormFeatureState,
    state => state.error
);
