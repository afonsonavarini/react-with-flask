import React from 'react'
import './ParameterInput.style.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

function ParameterInput() {

  const [parametros, setParametros] = useState('')

  const onSubmit = async () => {
    console.log(parametros)
    const response = await axios.post("http://localhost:5000/start", {parametros})
    console.log(response)
  }

  const clear = () => {
    setParametros('')
  }

  return (
    <div className='ParameterInputContainer'>
        <label className='inputLabel'>INPUT YOUR VALUES </label>
        <input type='text' value={parametros} onChange={(ev) => {setParametros(ev.target.value)}} />
        <div className='buttonContainer'>
            <button className="parameterButton submit" onClick={onSubmit}>Submit</button>
            <button className="parameterButton clear" onClick={clear}>Clear</button>
        </div>
        
    </div>
  )
}

export default ParameterInput