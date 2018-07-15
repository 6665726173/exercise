import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

import * as moment from 'moment';
import {v1 } from 'uuid';
import { FormBuilder, formBuilder, Formio } from 'formiojs';
import * as fromBarrel from '../state';
import * as fromActions from '../state/form.actions';
import * as fromRoot from '../../state/app.state';
import { Store, select } from '@ngrx/store';
import { CustomFormio } from '../CustomFormIO';

@Component({
  selector: 'elm-form-submission',
  template: `<div #form></div>`,
})

export class FormSubmissionComponent implements  AfterViewInit, OnInit {
  formSchema: any;
  customFormio: CustomFormio;
  @ViewChild('form') form: ElementRef;

  constructor(private store: Store<fromRoot.State>) {
    this.customFormio = new CustomFormio();
  }

  ngOnInit(): void {
    this.store.pipe(select(fromBarrel.getFormSchema)).subscribe(
      formSchema => this.formSchema = formSchema
    );
  }

  ngAfterViewInit() {
    this.createForm(this.form.nativeElement, this.formSchema, this.store);
  }

  createForm(formElem, formSchema, store) {
    this.customFormio.renderForm(formElem, formSchema)
      .then(function(form) {
        form.on('submit', (submission) => {
          // Extending submission data without mutation
          const data = Object.assign({}, submission.data, { submitDate: moment().format('MMMM Do YYYY, h:mm:ss a'), id: v1() });
          store.dispatch(new fromActions.CreateSubmission(data));
      });
    });
  }

}
