import * as React from 'react';
import styled from 'styled-components';

interface Props {
  value: number;
  onChange: React.Dispatch<number>;
}

const FormSlider: React.FC<Props> = (props) => {
  return (
    <div>
      <Label htmlFor="slider">{props.children}</Label>
      <Field>
        Just me <Slider type="range" name="slider" min="1" value={props.value} onChange={(event) => props.onChange(+event.target.value)}/> +100
        <CurrentValue>{props.value} fte</CurrentValue>
      </Field>
    </div>
  )
}

export default FormSlider;

const Label = styled.label`
  font-size: 18px;
  color: var(--color-font);
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
`

const Field = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  display: flex;
  font-size: 15px;
  padding: 0 16px;
  border: 1px solid #D7E0E7;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 3px;
  white-space: nowrap;
`

const Slider = styled.input`
  width: 100%;
  margin: 0 16px;
  outline: none;
  cursor: pointer;
  -webkit-appearance:none;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border: 6px solid #000000;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    margin-top: -6px;
  }

  ::-moz-range-thumb {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    border: 6px solid #000000;
    width: 18px;
    height: 18px;
    border-radius: 9px;
  }

  ::-webkit-slider-runnable-track {

    background-color: #D7E0E7;
    height: 4px;
  }

`;

const CurrentValue = styled.h4`
  position: absolute;
  font-size: 18px;
  bottom: 8px;
  left: calc(100% + 16px);
  white-space: nowrap;
`