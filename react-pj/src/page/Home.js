import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import HomeCon from './Home/HomeCon';
import HomeNews from './Home/HomeNews';
import HomeView from './Home/HomeView';

function Home() {
  return (
    <Fragment>
      <HomeCon />
      <HomeNews />
      <HomeView />  
    </Fragment>  
  )
}

export default Home;
