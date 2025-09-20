import { useState } from 'react';
import './App.css';
import './NAVBAR/Navbar.jsx';
import Navbar from './NAVBAR/Navbar.jsx';

export default function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href =
      `mailto:phperez.work1@gmail.com?subject=PT Inquiry&body=Hi Paul,%0D%0A%0D%0AMy goals are...%0D%0A%0D%0AName:%0D%0AEmail:${encodeURIComponent(email)}`;
  };

  return (
    <div>
      <Navbar />
      <main className="wrapper">
        <section className="card">
          <h1>Train with Paul – NASM Certified</h1>
          <p>
            Get Lean, Strong, and Athletic — Without Wasting Hours in the Gym
          </p>
          <p>1:1 coaching in Knoxville or online. First consult is free!</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              Book Your Free Consult
            </button>
          </form>

          <div>
            <a href="tel:+15129992571">Call/Text: (512) 999-2571</a> ·{' '}
            <a href="mailto:phperez.work1@gmail.com">Email Paul</a>
          </div>

          <hr />

          <p>Most trainers sell workouts. I build results that stick. My system combines science-backed programming with the discipline I forged from years of training and combat sports.

Training with me isn’t just about looking better — it’s about building confidence, energy, and resilience that last.
          </p>
        </section>
      </main>
    </div>
  );
}
