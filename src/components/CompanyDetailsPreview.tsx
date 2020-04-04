import * as React from 'react';
import barber from '../assets/barber.jpg';
import { insuranceOptions, companyActivityScores, sizeMultiplier } from '../helpers/companyScore';
import { CompanyContext } from '../context';

interface CompanyDetails {
  companySize: number;
  companyActivity: 'beauty care' | 'hairdressing';
}

const ImageArea: React.FC = () => {
  const { state } = React.useContext(CompanyContext);
  const activityScores = companyActivityScores.find(activity => activity.value === state.activity)?.scoreItems;

  const companyInsuranceScore: { title: string, points: number }[] = insuranceOptions.map(({ option, title }, index) => {
    const sizeScore = sizeMultiplier[option] * state.size;
    const activityScore = activityScores?.find(score => score.option === option)?.points;

    const score = Math.round(activityScore ? activityScore + sizeScore : sizeScore);


    return {
      title,
      points: score >= 100 ? 100 : score,
    }
  })

  return (
    <div className="preview">
      <h1>Covering these areas is especially important for you:</h1>
      <div className="option">
      {
        companyInsuranceScore.map((option, index) => (
          <div className="option" key={index}>
            <h3>{option.title}</h3>
            <div className="score" >
              <div className="fill" style={{ width: `${option.points}%` }}></div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default ImageArea;