// import logo from './logo.svg';
// 절대경로로 쓰고 싶은 경우는 public으로 이미지 파일을 옮긴다음, 써준다.
import React from 'react'; // 필요한 기능이다. usestate(감지) 쓸거면 필요함. 별도의 경로가 없다 > 노트모듈어딘가에 있다.
import Header from './component/Header';
import Footer from './component/Footer';
import RouterPage from './Router/RouterPage';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouterPage />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
