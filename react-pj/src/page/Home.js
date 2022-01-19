import React from 'react';
import { Fragment } from 'react';
import HomeCon from './Home/HomeCon';
import HomeNews from './Home/HomeNews';
import HomeView from './Home/HomeView';

function Home() {
  return (
    <Fragment>
      <div className='page_wrap'>
        <h2>Home</h2>
        <HomeCon />
        <HomeNews />
        <HomeView />  
      </div>
    </Fragment>  
  )
}

export default Home
