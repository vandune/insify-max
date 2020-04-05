import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import chat from '../assets/chat.svg';
import heart from '../assets/heart.svg';

const SupportBar: React.FC = () => {
  return (
    <Footer>
      <Section>
        <Support>
          <img src={chat} alt="chat" />
          <section>
            <h3>Chat with our experts <div className="online">ONLINE</div></h3>
            <p>Instant answers to your questions</p>
          </section>
        </Support>
      </Section>
      <Save>
        <img src={heart} alt="save"/> Save for later
      </Save>
    </Footer>
  )
}

export default SupportBar;

const fadeIn = keyframes`
  0% {
    opacity: .2;
  }
  100% {
    opacity: 1;
  }
`

const Footer = styled.footer`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  border-top: 1px solid rgba(0,0,0,0.05);
  box-shadow:  0 0 16px rgba(0,0,0,0.05);
  padding: 16px;
`

const Section = styled.section`
  width: 100%;
  height: 100%;
`

const Support = styled.div`
  width: 100%;
  display: flex;

  img {
    width: 42px;
    height: 42px;
    border-radius: 21px;
    object-fit: none;
    background-color: #91ACC0;
    margin-right: 8px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h3 {
    font-size: 18px;
    line-height: 18px;
    font-weight: 600;
    margin-top: 3px;
  }

  p {
    font-size: 12px;
    font-weight: 400;
  }

  .online {
    font-weight: 200;
    font-size: 12px;
    letter-spacing: 4px;
    display: inline;
    padding-left: 24px;
    position: relative;
    animation: 1s ${fadeIn} ease-out infinite alternate;
  }

  .online:after {
    display: block;
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 4px;
    background-color: lightgreen;
    position: absolute;
    top: 5px;
    left: 8px;
  }
`

const Save = styled.p`
  font-weight: 400;
  width: 200px;
  text-align: right;
  padding-right: 24px;
  font-size: 14px;
  cursor: pointer;

  img {
    object-fit: none;
    margin-bottom: -4px;
    margin-right: 4px;
  }
`

