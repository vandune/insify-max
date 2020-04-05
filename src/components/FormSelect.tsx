import * as React from 'react';
import styled from 'styled-components';
import dropdownIcon from '../assets/arrow-down.svg'

interface Props {
  value: string;
  options: string[];
  onChange: React.Dispatch<string>;
}

const FormSelect: React.FC<Props> = (props) => {
  return (
    <div style={{ position: 'relative' }}>
      <Label htmlFor="form-slider">{props.children}</Label>
      <Field>
        <Select id="form-slider" value={props.value} onChange={(event) => props.onChange(event.target.value) }>
          { props.options.map((option, index) => <option value={option} key={index}>{option}</option>) }
        </Select>
        <img src={dropdownIcon} alt=""/>
      </Field>
    </div>
  )
}

export default FormSelect;

const Label = styled.label`
  font-size: 18px;
  color: var(--color-font);
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
`

const Field = styled.div`
  height: 48px;
  width: 100%;
  padding: 0 16px;
  border: 1px solid #D7E0E7;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border-radius: 3px;

  :focus-within {
    border: 1px solid #cccccc;
  }
`

const Select = styled.select`
  font: inherit;
  font-size: 15px;
  width: 100%;
  height: 100%;
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* background-image: url(...);   */
`;