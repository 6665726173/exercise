import TextFieldComponent from 'formiojs/components/textfield/Textfield';
import Picker from 'vanilla-picker';

export default class ColorPickerComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
      type: 'color',
      key:'color',
      inputType: 'text',
      defaultValue: '000000',
      label: 'Color Picker',
      validate: {
        custom: {
          "if": [
            {
              "!==": [
                {
                  "var": "input"
                },
                "AB2567"
              ]
            },
            true,
            "Choose any color other than [AB2567]"
          ]
        }
      },
      values: [{ label: '', value: '' }],
      fieldSet: false
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
    info.attr.class += ' color';
    return info;
  }
}
