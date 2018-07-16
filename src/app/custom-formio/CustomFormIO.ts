import { FormBuilder, Formio } from 'formiojs';
import ColorPicker from './builder-components/colorPicker/ColorPicker.js';
import ColorPickerForm from './builder-components/colorPicker/ColorPicker.Form.js';

import AllComponents from 'formiojs/components';
import Components from 'formiojs/components/Components';
export class CustomFormio {
  constructor() {
    // Add a color componenet
    AllComponents.color = ColorPicker;
    AllComponents.color.editForm = ColorPickerForm;

    // Re-register all components on runtime
    Components.setComponents(AllComponents);
  }

  formBuilder(htmlElement, formSchema) {
    return new FormBuilder(htmlElement, formSchema);
  }

  renderForm(form, formSchema, options = {}) {
    return Formio.createForm(form, formSchema, options);
  }
}
