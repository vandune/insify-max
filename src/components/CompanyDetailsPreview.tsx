import * as React from 'react';
import { insuranceOptions, companyActivityScores, sizeMultiplier } from '../helpers/companyScore';
import { CompanyContext } from '../context';
import styled from 'styled-components';

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
    <PreviewWrapper>
      <Title>Covering these areas is especially important for you:</Title>
      <Options>
      {
        companyInsuranceScore.map((option, index) => (
          <Option key={index}>
            <OptionTitle>{option.title}</OptionTitle>
            <Score>
              <ScoreFill style={{ width: `${option.points}%` }}></ScoreFill>
            </Score>
          </Option>
        ))
      }
      </Options>
    </PreviewWrapper>
  )
}

export default ImageArea;

const PreviewWrapper = styled.div`
 grid-column: 2 / 3;
 grid-row-start: 2;
 display: flex;
 flex-direction: column;
 align-items: center;
 z-index: 1;
 padding-top: 40px;

 @media(min-width: 1120px) {
    padding-top: 80px;
    grid-column: 3 / 5;
    grid-row: 1;
 }
`

const Options = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 26px;
  color: #ffffff;
  max-width: 480px;
  margin-bottom: 40px;
  text-align: center;
`

const Option = styled.div`
  margin-bottom: 32px;
`

const OptionTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 4px;
  color: #ffffff;
  font-weight: 400;
`

const Score = styled.div`
  background-color: rgba(255,255,255,0.3);
  height: 6px;
  width: 100%;
  border-radius: 4px;
`

const ScoreFill = styled.div`
  height: 100%;
  background-color: #ffffff;
  border-radius: 4px;
  transition: width .4s ease-in-out;
`