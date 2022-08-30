/** @format */

import { useEffect } from 'react';

import './App.css';

import Header from './components/Header';
import Widget from './components/Widget';

import { WidgetProvider } from './context/WidgetProvider';
import { getTimeSlots } from './utils';

const data = {
  start: '10:00',
  appointments: [
    {
      start: '10:45',
      duration: 45,
    },
    {
      start: '13:50',
      duration: 20,
    },
  ],
  end: '15:00',
};

function App() {
  useEffect(() => {
    console.log(getTimeSlots(data));
  }, []);

  return (
    <WidgetProvider>
      <div className="container">
        <Header />
        <Widget />
      </div>
    </WidgetProvider>
  );
}

export default App;
