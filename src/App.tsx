import React from 'react';
import { CompanyProvider } from './context';
import CompanyDetailsForm from './components/CompanyDetailsForm';
import CompanyDetailsPreview from './components/CompanyDetailsPreview';
import Navigation from './components/Navigation';
import SupportBar from './components/SupportBar';
import ImageBackdrop from './components/ImageBackdrop';
import barber from './assets/barber.jpg';
import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <Main>
      <CompanyProvider>
        <Navigation />
        <Grid>
          <CompanyDetailsForm />
          <CompanyDetailsPreview />
          <ImageBackdrop src={barber}/>
        </Grid>
        <SupportBar />
      </CompanyProvider>
    </Main>
  );
}

export default App;

const Main = styled.div`
  color: var(--color-font);
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  background-color: #FBF6F6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: auto;
  position: relative;

  @media (min-width: 1120px) {
    height: 100vh;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(320px, 1fr) 1fr;
  height: 100%;
  width: 100%;
  overflow: auto;

  @media(min-width: 720px) {
    grid-template-columns: 1fr minmax(720px, 1fr) 1fr;
  }

  @media(min-width: 1120px) {
    grid-template-columns: 1fr minmax(612px, 1fr) minmax(612px, 1fr) 1fr;
  }
`