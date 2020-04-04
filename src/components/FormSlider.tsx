import * as React from 'react';

interface Props {
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

const FormSlider: React.FC<Props> = (props) => {
  return (
    <div className="form-element">
      <label htmlFor="slider">{props.children}</label>
      <input type="range" name="slider" value={props.value} onChange={(event) => props.onChange(+event.target.value)}/>
    </div>
  )
}

export default FormSlider;