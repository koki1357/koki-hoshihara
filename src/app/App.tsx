import React from 'react';
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="profile">
          <h2>Koki-Hoshihara</h2>
          <p>2024/12/2から１年間毎日コミットします</p>
        </section>
        <section id="hobbies">
          <h2>趣味</h2>
          <p>生成AIとReactの勉強</p>
        </section>
        <section id="contact">
          <h2>連絡先</h2>
          <p>ここに連絡先を記載予定</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;