import * as React from 'react';
import barber from '../assets/barber.jpg';

interface CompanyDetails {
  companySize: number;
  companyActivity: 'beauty care' | 'hairdressing';
}

const ImageArea: React.FC = () => {
  return <img src={barber} alt=""/>
}

export default ImageArea;