import { useState } from 'react';
import UIinput from "./UIinput";

export default {
  title: 'Ui-Kit/UIinput',
  component: UIinput
};

const Template = (arg) => {
  const [value, setValue] = useState('');

  const handleInputChange = value => {
    setValue(value);
  }

  return (
    <UIinput
      {...arg}
      value={value}
      handleInputChange={handleInputChange}
    />
  )
}

const props = {
  value: '',
  handleInputChange: () => console.log('change'),
  placeholder: 'placeholder',
  classes: '',
}

export const Default = Template.bind({});

Default.args = {
  ...props
}