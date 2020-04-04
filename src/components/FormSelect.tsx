import * as React from 'react';

interface Props {
  value: string;
  options: string[];
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const FormSlider: React.FC<Props> = (props) => {
  return (
    <div className="form-element">
      <label htmlFor="main-activity">{props.children}</label>
      <select name="form-slider" id="form-slider" value={props.value} onChange={(event) => props.onChange(event.target.value) }>
        { props.options.map((option, index) => <option value={option} key={index}>{option}</option>) }
      </select>
    </div>
  )
}

export default FormSlider;