import { Component, OnInit, OnDestroy} from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromBarrel from '../state';
import * as fromActions from '../state/form.actions';
import { Submission } from '../Submission';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'elm-form-list-submissions',
  templateUrl: './form-list-submissions.component.html'
})
export class FormListSubmissionsComponent implements OnInit, OnDestroy {
  submissions: any;
  selectedSubmission: Submission | null;
  componentActive: boolean;
  constructor(private store: Store<any>) {
    this.componentActive = true;
  }

  ngOnDestroy(): void {
    // unsubscribe
    this.componentActive = false;
  }

  ngOnInit() {
    // Subscribe to get submissions list
    this.store.pipe(select(fromBarrel.getSubmissions),
    takeWhile(() => this.componentActive)
    ).subscribe(
      submissions => this.submissions = submissions
    );

    // Subscribe to get current selected list
    this.store.pipe(
      select(fromBarrel.getCurrentSubmission),
      takeWhile(() => this.componentActive)
    ).subscribe(
      CurrentSubmission => this.selectedSubmission = CurrentSubmission
    );

  }

  // Click Event: set selected submission.
  submissionSelected(submission: Submission) {
    this.store.dispatch(new fromActions.SetCurrentSubmission(submission));
  }
}
