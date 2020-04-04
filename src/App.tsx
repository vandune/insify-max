import React from 'react';
import { CompanyProvider } from './context';
import CompanyDetailsForm from './components/CompanyDetailsForm';
import CompanyDetailsPreview from './components/CompanyDetailsPreview';
import './App.css';

function App() {
  return (
    <div className="App">
      <CompanyProvider>
        <CompanyDetailsForm />
        <CompanyDetailsPreview />
      </CompanyProvider>
    </div>
  );
}

export default App;
