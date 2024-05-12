import React from 'react';
import './Home.css';
import Logo from '../../logo/logo';            

function Home() {
  return (
    < div className='home_con' >
        <div className='home_text'>
            <Logo />
            <h1 className='home_wia'>Where It’s @</h1>
            <p className='home_tme'>Ticketing made easy</p>
        </div>
    </div >

)
}

export default Home