
import React from 'react';
import './Search.css'; 

function Search() {
  return (
    <div className="search-page">
      <section className="search-section">
        <h2>You might find this interesting...</h2>
        <div className="search-interesting-content">
          <div className="search-item">Healthy meal plans under 500 calories</div>
          <div className="search-item">10-minute meditation for stress relief</div>
          <div className="search-item">Best stretches for post-run recovery</div>
        </div>
        <div className="search-question">
          <a href="/search">Why am I seeing this?</a>
        </div>
      </section>
      <hr className="section-divider"></hr>
      <section className="search-section">
        <h2>Trending Topics</h2>
        <div className="trending-topics">
          <div className="trending-item">Intermittent Fasting: Benefits and How to Start</div>
          <div className="trending-item">Virtual 5K Runs and Marathons</div>
          <div className="trending-item">Plant-Based Diets for Athletes</div>
          <div className="trending-item">Meditation Apps for Mindfulness</div>
          <div className="trending-item">Desk Exercises for Remote Workers</div>
          <div className="trending-item">The Rise of Telemedicine</div>
        </div>
      </section>
    </div>
  );
}

export default Search;
