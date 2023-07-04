import React from 'react'
import ParameterInput from '../../components/ParameterInput/ParameterInput.index'
import LogScreen from '../../components/LogScreen/LogScreen.index'
import './TaskRun.style.css'
import Header from '../../components/Header/Header.index'
import Footer from '../../components/Footer/Footer.index'


function TaskRun() {
  return (
    <div className='TaskRunContainer'>
        <Header></Header>
        <ParameterInput></ParameterInput>
        <LogScreen></LogScreen>
        <Footer></Footer>
    </div>
  )

}

export default TaskRun