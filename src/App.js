import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {updateBids, updateAsks} from './actions'
import logo from './logo.svg';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const {bids, asks} = useSelector(({bids, asks}) => ({bids, asks}));
  useEffect(() => {
    const conn = new WebSocket("wss://testnet-dex.binance.org/api/ws");
    conn.onopen = () => {
        conn.send(JSON.stringify({ method: "subscribe", topic: "marketDepth", symbols: ["BNB_USDT.B-B7C"] }));
    }
    conn.onmessage = ({data}) => {
      const {data: parsedData} = JSON.parse(data);
      const {bids, asks} = parsedData;
      dispatch(updateBids({bids}));
      dispatch(updateAsks({asks}));
    }
  }, [dispatch]);
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
          Bids: {bids}
          Asks: {asks}
        </div>
      </header>
    </div>
  );
}

export default App;
