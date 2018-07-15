import {  CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormSubmissionsShellComponent } from './form-submissions-shell/form-submissions-shell.component';
import { FormSubmissionComponent } from './form-submission/form-submission.component';
import { FormRendererComponent } from './form-renderer/form-renderer.component';
import { FormListSubmissionsComponent } from './form-list-submissions/form-list-submissions.component';
import { StoreModule } from '@ngrx/store';

import * as fromForm from './state/form.reducer';

@NgModule({
  declarations: [
    FormBuilderComponent,
    FormSubmissionsShellComponent,
    FormSubmissionComponent,
    FormRendererComponent,
    FormListSubmissionsComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('form', fromForm.reducer),
  ]
})
export class FormModule { }
