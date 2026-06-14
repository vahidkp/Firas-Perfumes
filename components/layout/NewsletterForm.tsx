'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

type Status = 'idle' | 'success' | 'error';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!valid) {
      setStatus('error');
      return;
    }
    // Phase 1: stubbed — wire to an API route / ESP later.
    setStatus('success');
    setEmail('');
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex items-center border-b border-onyx/30 focus-within:border-gold">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== 'idle') setStatus('idle');
          }}
          placeholder="Enter your email"
          className="w-full bg-transparent py-2.5 text-sm text-onyx placeholder:text-grey focus:outline-none"
          aria-describedby="newsletter-status"
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="p-2 text-gold transition-transform hover:translate-x-0.5"
        >
          {status === 'success' ? (
            <Check className="h-5 w-5" aria-hidden />
          ) : (
            <ArrowRight className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>
      <p id="newsletter-status" aria-live="polite" className="mt-2 text-xs text-grey">
        {status === 'success' && 'Thank you — your code is on its way.'}
        {status === 'error' && 'Please enter a valid email address.'}
      </p>
    </form>
  );
}
