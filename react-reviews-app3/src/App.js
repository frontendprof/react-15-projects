

import React from 'react';
import { FaDivide, FaKaaba } from 'react-icons/fa';
import reviews from './data';
import Review from './Review';



function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  )
}

export default App;