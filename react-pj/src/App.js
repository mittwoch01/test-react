// import logo from './logo.svg';
// 절대경로로 쓰고 싶은 경우는 public으로 이미지 파일을 옮긴다음, 써준다.
import React from 'react'; // 필요한 기능이다. usestate 쓸거면 필요함. 별도의 경로가 없다 > 노트모듈어딘가에 있다.
import Header from './component/Header';
import Home from './page/Home';
import Footer from './component/Footer';
import About from './page/About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route element={<Home />}/>
        <Route element={<About />}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
