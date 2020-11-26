import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'
import MyProjects from './components/MyProjects'
import * as serviceWorker from './serviceWorker';
import './index.css';

const App = () => {
  const [ view, setView ] = useState('landing')

  const showView = () => {
    switch (view) {
      case 'landing':
        return <LandingPage />

      case 'projects':
        return <MyProjects />
    
      default:
        return <ContactMe />
    }
  }

  return(
    <div>
      <Header setView={ setView } view={ view } />  
      { showView() }
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

serviceWorker.register();
