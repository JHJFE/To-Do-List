import React from 'react';
import './App.css';
import GlobalStyles from "./styles/GlobalStyles.styles";
import Nav from './components/nav/nav.js';
import FavoriteList from './components/list/favorite-list';
function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Nav />
        <FavoriteList/>
      </div>
    </>
  );
}
// 
export default App;
