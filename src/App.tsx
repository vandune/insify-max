import React from 'react';
import CompanyDetailsForm from './components/CompanyDetailsForm';
import CompanyDetailsPreview from './components/CompanyDetailsPreview';
import './App.css';

function App() {
  return (
    <div className="App">
      <CompanyDetailsForm />
      <CompanyDetailsPreview />
    </div>
  );
}

export default App;
