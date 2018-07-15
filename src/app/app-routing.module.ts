import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent} from './template/home/home.component';

import { FormBuilderComponent } from './custom-formio/form-builder/form-builder.component';
import { FormSubmissionsShellComponent } from './custom-formio/form-submissions-shell/form-submissions-shell.component';
import { FormSubmissionComponent } from './custom-formio/form-submission/form-submission.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'builder', component: FormBuilderComponent},
  {path: 'submissions', component: FormSubmissionsShellComponent},
  {path: 'form', component: FormSubmissionComponent},
  // {path: 'submission/:id', component: FormioSubmissionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
