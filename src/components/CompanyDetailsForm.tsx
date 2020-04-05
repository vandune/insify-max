import * as React from 'react';
import styled from 'styled-components';
import FormSlider from './FormSlider';
import FormSelect from './FormSelect';
import { CompanyContext } from '../context';
import { companyActivityScores } from '../helpers/companyScore';
import { debounce } from 'lodash';

interface FormCopy {
  confirmButton: string;
  toggleButton: string;
}

interface ButtonProps {
  primary: boolean;
}

const CompanyDetailsForm: React.FC = () => {
  const { dispatch, state } = React.useContext(CompanyContext);
  const [formCopy, setFormCopy] = React.useState<FormCopy>({ confirmButton: 'Yes it is', toggleButton: 'No, it’s not' });
  const [formIsHidden, setFormIsHidden] = React.useState<boolean>(true);

  const mappedActivityOptions = companyActivityScores.map(activity => activity.value);

  React.useEffect(() => {
    formIsHidden
      ? setFormCopy({ confirmButton: 'Yes it is', toggleButton: 'No, it’s not' })
      : setFormCopy({ confirmButton: 'Continue', toggleButton: 'Cancel' })
  }, [formIsHidden]);

  return (
    <Wrapper>
      <Header>Thanks. According to the CoC your company size is <Span>{state.size} fte</Span> and has activities in <Span>{state.activity.toLocaleLowerCase()}</Span>. Is that correct?</Header>

      <Form>
        { formIsHidden ? '' :
          <Section>
            <FormSlider
              value={state.size}
              onChange={(size: number) => dispatch({ type: 'SET_COMPANY_SIZE', payload: size })}
            >
              What’s your company size?
            </FormSlider>

            <FormSelect
              value={state.activity}
              options={mappedActivityOptions}
              onChange={(activity: string) => dispatch({ type: 'SET_ACTIVITY', payload: activity })}
            >
              And what are your main activities?
            </FormSelect>
          </Section>
        }

        <ButtonGroup>
          <Button primary>
            {formCopy.confirmButton}
          </Button>
          <Button primary={false} onClick={() => setFormIsHidden(!formIsHidden)}>
            {formCopy.toggleButton}
          </Button>
        </ButtonGroup>
      </Form>
    </Wrapper>
  )
}

export default CompanyDetailsForm;

const Wrapper = styled.div`
  padding-top: 40px;
  margin-bottom: 16px;
  max-width: 560px;
  grid-column-start: 2;

  @media (min-width: 1120px) {
    padding-top: 80px;
  }
`;

const Form = styled.div`
  width: 100%;
  max-width: 428px;
  margin-bottom: 40px;
  padding-right: 80px;
`

const Header = styled.h1`
  width: 100%;
  font-size: 26px;
  line-height: 36px;
  margin-bottom: 40px;
`

const Span = styled.span`
  color: var(--color-insify-blue);
`

const Section = styled.section`
  margin-bottom: 48px;

  > * {
    margin-bottom: 24px;
  }
`

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
`

const Button = styled.button<ButtonProps>`
  font: inherit;
  font-weight: bold;
  color: ${(props: ButtonProps) => props.primary ? '#ffffff' : 'var(--color-insify-blue)'};
  background-color: ${(props: ButtonProps) => props.primary ? 'var(--color-insify-blue)' : 'transparent'};
  border: ${(props: ButtonProps) => props.primary ? 'none' : '1px solid #0040E3'};
  border-radius: 3px;
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: all .3s ease-in-out;
  outline: none;

  :focus {
    box-shadow: 0 0 0 2px rgba(0,0,0,0.2);
  }

  :hover {
    color: #ffffff;
    color: ${(props: ButtonProps) => props.primary ? '#ffffff' : 'hsl(223, 100%, 20%);'};
    background-color: ${(props: ButtonProps) => props.primary ? 'hsl(223, 100%, 35%);' : 'transparent'};
    border: ${(props: ButtonProps) => props.primary ? 'none' : '1px solid hsl(223, 100%, 20%);'};
  }
`