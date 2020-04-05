import * as React from 'react';

interface Props {
  value: string;
  options: string[];
  onChange: React.Dispatch<string>;
}

const FormSelect: React.FC<Props> = (props) => {
  return (
    <div >
      <label htmlFor="main-activity">{props.children}</label>
      <select name="form-slider" id="form-slider" value={props.value} onChange={(event) => props.onChange(event.target.value) }>
        { props.options.map((option, index) => <option value={option} key={index}>{option}</option>) }
      </select>
    </div>
  )
}

export default FormSelect;