import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { FormBuilder, Formio } from 'formiojs';
import { Store, select } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';

import * as fromSelector from '../state';
import * as fromActions from '../state/form.actions';
import * as fromRoot from '../../state/app.state';
import { CustomFormio } from '../CustomFormIO';

@Component({
  selector: 'elm-form-builder',
  template: `<div #builder></div>`,
})

export class FormBuilderComponent implements OnInit, AfterViewInit, OnDestroy {
  formBuilder: FormBuilder;
  formSchema: any;
  customFormio: CustomFormio;
  componentActive: boolean;

  @ViewChild('builder') builder: ElementRef;

  constructor(private store: Store<fromRoot.State>) {
    this.customFormio = new CustomFormio();
    this.componentActive = true;
  }

  setDisplay(display, store) {
    this.formBuilder.setDisplay(display).then(function (instance) {
      // Save the updated schema
      instance.on('saveComponent', function(event) {
        const schema = instance.schema;
        store.dispatch(new fromActions.UpdateScehma(schema));
      });
      // Dekete the deleted componenet by its HTML id
      instance.on('deleteComponent', function(event) {
        const componentId = event.id;
        store.dispatch(new fromActions.DeleteComponenetFromScehma(componentId));
      });
    });
  }

  ngOnDestroy(): void {
    // unsubscribe
    this.componentActive = false;
  }

  ngOnInit() {
    this.store
      .pipe(select(fromSelector.getFormSchema),
      takeWhile(() => this.componentActive)
    ).subscribe(formSchema => (this.formSchema = formSchema));
  }

  ngAfterViewInit(): void {
    const localStore = this.store;
    this.formBuilder = this.customFormio.formBuilder(
      this.builder.nativeElement,
      this.formSchema
    );
    this.setDisplay('form', localStore);
  }
}
