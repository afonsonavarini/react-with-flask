import React, {useState, useEffect} from 'react'
import {io} from 'socket.io-client'
import './LogScreen.style.css'

function LogScreen() {
    const [logs, setLogs] = useState('')
  
    useEffect(() => {
      const socket = io("http://localhost:5000");
  
  
      socket.on("log", (data) => {
        const { message } = data;
        setLogs((prevLogs) => [...prevLogs, message]);
      });
  
      return () => {
        socket.disconnect();
      };
    }, [])

    const clearLogs = () => {
        setLogs('')
    }

    return (
      <div className='logWrapper'>
        <h1 className='logTitle'>Log Screen</h1>
        <div className='LogScreenContainer'>
        <button className='clearLogsButton' onClick={clearLogs}>Clear Logs</button>
        {logs && logs.length > 0 ? (
            logs.map((log, index) => {
                return <p key={index}>{log}</p>;
            })
            ) : (
            <p className='cleanLogs'>No logs found.</p>
            )}
        </div>
      </div>
    )
  }

export default LogScreen