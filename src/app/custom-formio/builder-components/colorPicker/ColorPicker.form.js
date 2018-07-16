import baseEditForm from 'formiojs/components/base/Base.form';
import ColorPickerEditDisplay from './ColorPicker.edit.display';

export default function (...extend){
  return baseEditForm(...extend,[
    {
      key: 'display',
      components: ColorPickerEditDisplay
    }
  ])
}
