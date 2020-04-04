import * as React from 'react';
import FormSlider from './FormSlider';
import FormSelect from './FormSelect';
import { CompanyContext } from '../context';
import { companyActivityScores } from '../helpers/companyScore';

interface FormCopy {
  confirmButton: string;
  toggleButton: string;
}

const CompanyDetailsForm: React.FC = () => {
  const { dispatch, state } = React.useContext(CompanyContext);
  const [formCopy, setFormCopy] = React.useState<FormCopy>({ confirmButton: 'Yes it is', toggleButton: 'No, it’s not' });
  const [formIsHidden, setFormIsHidden] = React.useState<boolean>(true)

  const mappedActivityOptions = companyActivityScores.map(activity => activity.value);

  React.useEffect(() => {
    formIsHidden
      ? setFormCopy({ confirmButton: 'Yes it is', toggleButton: 'No, it’s not' })
      : setFormCopy({ confirmButton: 'Continue', toggleButton: 'Cancel' })
  }, [formIsHidden]);

  return (
    <section className="details-form">
      <h1>Thanks. According to the CoC your company size is <span>{state.size} fte</span> and has activities in <span>{state.activity.toLocaleLowerCase()}</span>. Is that correct?</h1>

      {formIsHidden ? '' :
        <div className="form">
          <FormSlider
            value={state.size}
            onChange={(size) => dispatch({ type: 'SET_COMPANY_SIZE', payload: size })}
          >
            What’s your company size?
          </FormSlider>
          <FormSelect
            value={state.activity}
            options={mappedActivityOptions}
            onChange={(activity) => dispatch({ type: 'SET_ACTIVITY', payload: activity })}
          >
            And what are your main activities?
          </FormSelect>
        </div>
      }

      <button className="btn-confirm">
        {formCopy.confirmButton}
      </button>
      <button className="btn-toggle-form" onClick={() => setFormIsHidden(!formIsHidden)}>
        {formCopy.toggleButton}
      </button>
    </section>
  )
}

export default CompanyDetailsForm;