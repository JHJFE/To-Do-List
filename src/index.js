import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import  store  from './store/store.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// 여기서 제대로 못가져오는 듯함, 못 주던지
const container = document.getElementById('root');
const root = createRoot(container);
// 나중에 리덕스 다시 쓸때 프로바이더 해주기  <Provider store={store}> </Provider>
// 리덕스를 사용하지 않고 선언하면 렌더링이 안됨 .. 이유는 모름
root.render(
      <Provider store={store}>
            <BrowserRouter>
                  <App />
            </BrowserRouter>
      </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
