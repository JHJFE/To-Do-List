import React, { useEffect, useState } from 'react';
import './App.css';
import GlobalStyles from "./styles/GlobalStyles.styles";
import Nav from './components/nav/nav.js'
import Loading from './pages/loading';

function App() {
  let [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => { setLoaded(true) }, 100)
  }, [])

  return (
    <>
      <GlobalStyles />
      <div className="App">
        {isLoaded ? 
        <>
          <Nav />
        </>
        : 
        <Loading />}

      </div>
    </>
  );
}
// 

export default App;
