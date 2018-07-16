import TextFieldComponent from "formiojs/components/textfield/Textfield";
import BaseComponent from "formiojs/components/base/Base";
import Picker from "vanilla-picker";

export default class ColorPickerComponent extends BaseComponent {
  static schema(...extend) {
    return BaseComponent.schema(
      {
        type: "color",
        key: "color",
        inputType: "text",
        defaultValue: "000000",
        label: "Color Picker",
        validate: {
          custom: {
            if: [
              {
                "!==": [
                  {
                    var: "input"
                  },
                  "AB2567"
                ]
              },
              true,
              "Choose any color other than [AB2567]"
            ]
          }
        }
      },
      ...extend
    );
  }

  static get builderInfo() {
    return {
      title: "Color Picker",
      group: "basic",
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
    info.attr.class += " color";
    return info;
  }
}
