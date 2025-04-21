import React from 'react';
import './styles/main.css';

import logo from './assets/logo.png';
import noakhali from './assets/noakhali.png';
import feni from './assets/feni.png';
import quota from './assets/quota-protest.png';
import coin from './assets/coin.png';

function App() {
  return (
    <div className="lexend-font w-full">


       <header className="sticky top-0 z-10">
      <nav id="navbar">
        <div className="navbar bg-base-100 px-16 bg-secondary-color py-6">
          <div className="navbar-start">
            <a id="blog" className="btn btn-ghost text-xl font-semibold bg-primary-color lg:px-10">
              Blog
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
          <div className="logo-title-container">
  <img src={logo} alt="logo" className="logo-img" />
  <span className="site-title">Donate Bangladesh</span>
</div>
          </div>
          <div className="navbar-end">
            <a id="cash-out-btn" className="btn text-xl font-semibold text-dark-3 lg:px-10">
              5550 BDT
            </a>
          </div>
        </div>
      </nav>
    </header>


      {/* Main Content */}
      <main className="my-20 lg:px-36 relative w-full">
        {/* Action Buttons */}
        <div id="action-btn" className="flex justify-center space-x-4 sticky mx-auto w-full z-40 top-16">
          <button id="donation-button" className="btn btn-lg text-xl font-semibold px-10">
            Donate Now
          </button>
          <button id="donation-history-btn" className="btn btn-lg text-xl font-semibold px-10">
            History
          </button>
        </div>

        {/* Card Template */}
        {[{
          id: 1,
          image: noakhali,
          place: "Flood at Noakhali",
          description: "The recent floods in Noakhali have caused significant damage to homes infrastructure. Your donation will help provide essential supplies and to those affected by this disaster. Every contribution, big or small, makes difference. Please join us in supporting the relief efforts and making a positive impact on the lives of those in need.",
          defaultAmount: "100 BDT"
        }, {
          id: 2,
          image: feni,
          place: "Flood at Feni",
          description: "Feni was recently struck by devastating floods, leaving many families homeless and in need of basic necessities. Let's help them recover and rebuild their lives.",
          defaultAmount: "500 BDT"
        }, {
          id: 3,
          image: quota,
          place: "Aid for Injured in the Quota Movement",
          description: "Help the injured students who suffered during the recent quota movement. Your donation can help cover medical treatment and support for families.",
          defaultAmount: "700 BDT"
        }].map(({ id, image, place, description, defaultAmount }) => (
          <div className="hero" key={id}>
            <div className="hero-content">
              <div className="hero-image">
                <img src={image} alt={place} />
              </div>
              <div className="hero-text">
                <button className="donation-btn">
                  <img src={coin} alt="Coin" className="icon" />
                  <span>{defaultAmount}</span>
                </button>
                <h1 className="text-2xl font-bold">
                  Donate for <span id={`place-${id}`}>{place}</span>, Bangladesh
                </h1>
                <p className="py-2 text-base font-light text-dark-3">
                  {description}
                </p>
                <input
                  type="text"
                  id={`input-balance${id}`}
                  placeholder="Write Donation Amount"
                />
                <button
                  id={`donate-now-btn${id}`}
                  className="btn btn-ghost text-xl font-semibold bg-primary-color"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Donation History */}
        <div id="donation-history-form" className="hidden w-full text-xl mt-6 bg-secondary-color">
          <div id="donation-container"></div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="navbar bg-base-100 px-16 bg-secondary-color py-16"></div>
      </footer>
    </div>
  );
}

export default App;