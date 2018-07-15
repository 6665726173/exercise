import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import {v1 } from 'uuid';
import { FormBuilder, formBuilder, Formio } from 'formiojs';
import * as fromBarrel from '../state';
import * as fromActions from '../state/form.actions';
import * as fromRoot from '../../state/app.state';
import { Store, select } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { CustomFormio } from '../CustomFormIO';

@Component({
  selector: 'elm-form-renderer',
  template: `<div #form></div>`
})

export class FormRendererComponent implements  OnInit, OnDestroy {
  @ViewChild('form') form: ElementRef;
  componentActive: boolean;
  formSchema: any;
  customFormio: CustomFormio;

  constructor(private store: Store<fromRoot.State>) {
    this.componentActive = true;
    this.customFormio = new CustomFormio();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  // Subscribe to get the form schema
  ngOnInit(): void {
    this.store.pipe(select(fromBarrel.getFormSchema),
    takeWhile(() => this.componentActive)
    ).subscribe(
      formSchema => this.formSchema = formSchema
    );

    this.initForm(this.form.nativeElement, this.formSchema, this.store);
  }

  // Subscribe to get the latest selected submissions
  initForm(form, formSchema, store) {
    this.store.pipe(
      select(fromBarrel.getCurrentSubmission),
      takeWhile(() => this.componentActive)
    ).subscribe(
      currentProduct => this.renderForm(form, formSchema, store, currentProduct)
    );
  }

  // Render form with data
  renderForm(formElem, formSchema, store , data) {
    this.customFormio.renderForm(formElem, formSchema, { readOnly: true})
    .then(function(form) {
      form.submission = {
        data: data
      };
    });
  }

}
