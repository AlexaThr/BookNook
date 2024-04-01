import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import styles from './css/styles.css';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

const root = createRoot(document.getElementById('root'));
root.render(<><App/></>);