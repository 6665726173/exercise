import TextFieldComponent from 'formiojs/components/textfield/Textfield';

export default class ColorPickerComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      inputType: 'text',
      label: 'Color Picker'
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Color Picker',
      group: 'basic',
      weight: -1,
      schema: ColorPickerComponent.schema()
    };
  }

  constructor(component, options, data) {
    super(component, options, data);
  }

  get defaultSchema() {
    return ColorPickerComponent.schema();
  }

  elementInfo() {
    const info = super.elementInfo();
    info.attr.value = "ab2567";
    return info;
  }
}
