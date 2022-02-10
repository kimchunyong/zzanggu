import React from 'react';
import {
  Container,
} from 'reactstrap';
// import logo from './logo.svg';
import './App.css';
import Screen from './Screen';
import config from './config';

export default function App() {
  return (
    <Container className="app">
      <Screen.Header config={config} />
      <Screen.Write />
      <Screen.Gallery config={config} />
      <Screen.Comment config={config} />
    </Container>
  );
}
