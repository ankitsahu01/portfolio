'use client';
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const Contact: React.FC = () => {
  const [data, setData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const inputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const clearInput = () => {
    setData({ user_name: '', user_email: '', message: '' });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';

    emailjs.send(serviceId, templateId, data, userId).then(
      () => {
        setSuccess(true);
        clearInput();
        setLoading(false);
      },
      (err) => {
        console.error('FAILED...', err);
        setLoading(false);
        setError(err);
      }
    );
  };

  return (
    <div className='min-h-screen pt-28 pb-16 px-4 max-w-3xl mx-auto flex flex-col justify-center'>
      {/* Unified Executive Contact Card */}
      <div className='w-full bg-surface-raised border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden'>
        {/* Subtle Ambient Glow */}
        <div className='absolute -right-20 -top-20 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl pointer-events-none' />

        {/* Card Header: Engineering Challenge Callout */}
        <div className='p-6 sm:p-8 border-b border-white/[0.08] bg-surface-overlay/20 relative z-10'>
          <div className='flex items-center justify-between gap-3 mb-3'>
            <span className='text-xs font-mono uppercase tracking-widest text-primary-container font-semibold'>
              // LOOKING FOR MY NEXT ENGINEERING CHALLENGE
            </span>
            <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-success-emerald/10 border border-success-emerald/30 text-success-emerald text-[11px] font-mono shrink-0'>
              <span className='w-1.5 h-1.5 rounded-full bg-success-emerald animate-pulse' />
              Available
            </span>
          </div>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight'>
            Let&apos;s build something fast, resilient, and enduring together.
          </h1>
          <p className='text-text-secondary text-xs sm:text-sm mt-2.5 leading-relaxed'>
            Open for full-time Senior / Lead Frontend &amp; Full Stack roles, GCP cloud infrastructure design, and GenAI pipeline consulting.
          </p>
        </div>

        {/* Card Body: Interactive Form */}
        <form onSubmit={submitHandler} className='p-6 sm:p-8 relative z-10'>
          <div className='space-y-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div>
                <label className='block text-xs font-mono uppercase text-text-secondary mb-2'>
                  Name <span className='text-primary-container'>*</span>
                </label>
                <input
                  type='text'
                  name='user_name'
                  value={data.user_name}
                  onChange={inputHandler}
                  required
                  placeholder='Your name'
                  className='w-full bg-surface-overlay border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container font-mono transition-all'
                />
              </div>

              <div>
                <label className='block text-xs font-mono uppercase text-text-secondary mb-2'>
                  Email Address <span className='text-primary-container'>*</span>
                </label>
                <input
                  type='email'
                  name='user_email'
                  value={data.user_email}
                  onChange={inputHandler}
                  required
                  placeholder='you@company.com'
                  className='w-full bg-surface-overlay border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container font-mono transition-all'
                />
              </div>
            </div>

            <div>
              <label className='block text-xs font-mono uppercase text-text-secondary mb-2'>
                Message <span className='text-primary-container'>*</span>
              </label>
              <textarea
                name='message'
                value={data.message}
                onChange={inputHandler}
                required
                rows={4}
                placeholder='Tell me about your project, team, or opportunity...'
                className='w-full bg-surface-overlay border border-white/10 rounded-lg p-3.5 text-sm text-white placeholder:text-text-muted focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container font-mono transition-all resize-none'
              />
            </div>

            {error && (
              <p className='text-sm font-mono text-red-400 bg-red-950/20 border border-red-800/30 p-3 rounded-lg'>
                Unable to send message directly. Please email me at{' '}
                {PORTFOLIO_DATA.personal.email}.
              </p>
            )}

            {success && (
              <p className='text-sm font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-800/30 p-3 rounded-lg'>
                Thank you! Your message has been received. I will reply shortly.
              </p>
            )}

            <div className='flex items-center justify-between pt-2'>
              <span className='text-xs font-mono text-text-muted hidden sm:inline'>
                Direct email: {PORTFOLIO_DATA.personal.email}
              </span>
              <Button
                type='submit'
                variant='primary'
                size='md'
                disabled={loading}
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <span>↗</span>
              </Button>
            </div>
          </div>
        </form>

        {/* Card Footer: Direct Channels */}
        <div className='px-6 py-4 sm:px-8 bg-surface-overlay/30 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-text-muted'>
          <span>Direct Channels:</span>
          <div className='flex items-center gap-4 flex-wrap'>
            <a
              href={PORTFOLIO_DATA.socials.emailMailto}
              className='hover:text-primary transition-colors inline-flex items-center gap-1'
            >
              {PORTFOLIO_DATA.personal.email}
            </a>
            <span className='text-white/20'>·</span>
            <a
              href={PORTFOLIO_DATA.socials.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors inline-flex items-center gap-1'
            >
              LinkedIn ↗
            </a>
            <span className='text-white/20'>·</span>
            <a
              href={PORTFOLIO_DATA.socials.github}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors inline-flex items-center gap-1'
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
