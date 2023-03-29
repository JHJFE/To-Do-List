import React, { useEffect, useState } from 'react';
import './App.css';
import GlobalStyles from "./styles/GlobalStyles.styles";
import Nav from './components/nav/nav.js'
import Loading from './pages/loading';
import { useSelector } from 'react-redux';

function App() {
  let [isLoaded, setLoaded] = useState(false)
  let mode = useSelector((state)=>state.mode)
  useEffect(() => {
    setTimeout(() => { setLoaded(true) }, 1000) // 바꿔야함
  }, [])

  return (
    <>
      <GlobalStyles />
      <div className = {mode ?null:'darkgray'}>
        <div className={isLoaded ? 'App' : 'App column-center'}>
          {isLoaded ?
            <Nav />
            :
            <Loading />}
        </div>
      </div>
    </>
  );
}
// 

export default App;
