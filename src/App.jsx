import { useState } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href =
      `mailto:phperez.work1@gmail.com?subject=PT Inquiry&body=Hi Paul,%0D%0A%0D%0AMy goals are...%0D%0A%0D%0AName:%0D%0AEmail:${encodeURIComponent(email)}`;
  };

  return (
    <main className="wrapper">
      <section className="card">
        <h1>Train with Paul – NASM Certified</h1>
        <p>
          Lean, athletic, disciplined coaching. In-person (Knox) or online.
        </p>
        <p>First consult free!</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@email.com"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <button type="submit">
            Book a Session
          </button>
        </form>

        <div>
          <a href="tel:+15129992571">Call/Text: (512) 999-2571</a> ·{' '}
          <a href="mailto:phperez.work1@gmail.com">Email Paul</a>
        </div>

        <hr />

        <ul>
          <li>• Fat loss & performance programming</li>
          <li>• Hybrid coaching: gym + jump rope conditioning</li>
          <li>• Simple nutrition targets (no crazy rules)</li>
        </ul>

        <p>(Testimonials & Calendly later. MVP first.)</p>
      </section>
    </main>
  );
}
