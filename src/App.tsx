/** @format */

import './App.css';

import Header from './components/Header';
import Widget from './components/Widget';

import { WidgetProvider } from './context/WidgetProvider';

function App() {
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
