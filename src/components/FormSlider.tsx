import * as React from 'react';

interface Props {
  value: number;
  onChange: React.Dispatch<number>;
}

const FormSlider: React.FC<Props> = (props) => {
  return (
    <div>
      <label htmlFor="slider">{props.children}</label>
      <input type="range" name="slider" value={props.value} onChange={(event) => props.onChange(+event.target.value)}/>
    </div>
  )
}

export default FormSlider;