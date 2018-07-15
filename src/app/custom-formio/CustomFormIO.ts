import { FormBuilder, Formio } from 'formiojs';
 import ColorPicker from './builder-components/colorPicker/ColorPicker.js';

export class CustomFormio {
  constructor() {
   Formio.registerComponent('custom', ColorPicker);
  }

  formBuilder(htmlElement, formSchema) {
    return new FormBuilder(htmlElement, formSchema);
  }

  renderForm(formElem, formSchema, optiona = {}) {
    return Formio.createForm(formElem, formSchema, optiona);
  }
}
