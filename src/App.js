import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';

function App() {
      
    const [Result, setResult] = useState('');
    const [isConnected, setIsConnected] = useState(true);


    useEffect(() => {
      axios.get('/demo/test') //@RequestMapping + @GetMapping
        .then(response => {
          setResult(response.data);
          setIsConnected(true);
        })
        .catch(error => {
          console.log(error);
          setIsConnected(false); // 연결 실패 시 isConnected를 false로 설정
        });
    }, []);
  
  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <div>
            {isConnected ? ( <div> front 에서 back 호출 : {Result}</div>) : (<div>백앤드 연결에 실패했습니다...</div>)}
            
            </div>
        </header>
      </div>
    );
}

export default App;
