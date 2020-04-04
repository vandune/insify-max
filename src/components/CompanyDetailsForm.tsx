import * as React from 'react';
import FormSlider from './FormSlider';
import FormSelect from './FormSelect';

interface FormCopy {
  confirmButton: string;
  toggleButton: string;
}

const companyActivities: string[] = ['beauty care', 'hairdressing'];

const CompanyDetailsForm: React.FC = () => {
  const [companySize, setCompanySize] = React.useState<number>(4)
  const [companyActivity, setCompanyActivity] = React.useState<string>('beauty care');
  const [formCopy, setFormCopy] = React.useState<FormCopy>({ confirmButton: 'Yes it is', toggleButton: 'No, it’s not' });
  const [formIsHidden, setFormIsHidden] = React.useState<boolean>(true)

  React.useEffect(() => {
    formIsHidden
      ? setFormCopy({ confirmButton: 'Yes it is', toggleButton: 'No, it’s not' })
      : setFormCopy({ confirmButton: 'Continue', toggleButton: 'Cancel' })
  }, [formIsHidden]);

  return (
    <section className="details-form">
      <h1>Thanks. According to the CoC your company size is <span>{companySize} fte</span> and has activities in <span>{companyActivity}</span>. Is that correct?</h1>

      {formIsHidden ? '' :
        <div className="form">
          <FormSlider value={companySize} onChange={setCompanySize}>
            What’s your company size?
          </FormSlider>
          <FormSelect value={companyActivity} onChange={setCompanyActivity} options={companyActivities}>
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