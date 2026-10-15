import React from 'react';
import { SiGithub, SiCredly } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';
import { MdEmail, MdArrowDownward } from 'react-icons/md';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import Button from '../common/Button';

export const HeroSection: React.FC = () => {
  const { personal, socials } = PORTFOLIO_DATA;

  return (
    <section
      className='max-w-[1200px] mx-auto px-5 sm:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 relative'
      id='about'
    >
      {/* Ambient background glow */}
      <div className='pointer-events-none absolute top-10 left-1/4 -translate-x-1/2 w-[520px] h-[280px] bg-gradient-to-tr from-primary-container/15 via-amber-500/5 to-transparent blur-3xl rounded-full' />

      <div className='relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center'>
        {/* Left Hero Content */}
        <div className='lg:col-span-7 flex flex-col items-start gap-5'>
          {/* Subheading pill badge */}
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-raised border border-amber-500/30 shadow-sm'>
            <span className='font-mono text-xs font-medium text-amber-300 tracking-wide'>
              {personal.heroSubheading}
            </span>
          </div>

          {/* Hero Headline */}
          <h1 className='text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-[1.08]'>
            {personal.heroTitlePrefix} <br className='hidden sm:block' />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500'>
              {personal.heroTitleGradient}
            </span>
          </h1>

          {/* Direct Subtitle */}
          <p className='text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl font-normal'>
            I'm{' '}
            <strong className='text-white font-semibold'>
              {personal.name}
            </strong>
            . {personal.heroBio}
          </p>

          {/* Current & Previous Work Banner */}
          <div className='flex flex-wrap items-center gap-y-2 gap-x-4 pt-1 text-xs font-mono text-text-muted'>
            <span className='flex items-center gap-1.5 text-text-secondary'>
              <span className='w-2 h-2 rounded-full bg-primary-container animate-pulse' />
              CURRENTLY:{' '}
              <a
                href={personal.currentCompanyUrl}
                target='_blank'
                rel='noreferrer'
                className='text-white font-semibold hover:text-amber-300 transition-colors'
              >
                {personal.currentCompany}
              </a>{' '}
              (Remote)
            </span>
            <span className='text-white/20 hidden sm:inline'>|</span>
            <span className='flex items-center gap-1.5 text-text-muted'>
              PREVIOUSLY:{' '}
              <a
                href={personal.previousCompanyUrl}
                target='_blank'
                rel='noreferrer'
                className='text-text-secondary hover:text-white transition-colors'
              >
                {personal.previousCompany}
              </a>
            </span>
          </div>

          {/* Action Row */}
          <div className='flex flex-wrap items-center gap-3 pt-3'>
            <Button href='/resume' variant='primary'>
              <span>View Resume</span>
              <span className='text-xs'>↗</span>
            </Button>
            <Button href='/contact' variant='secondary'>
              <span>Get in Touch</span>
              <span className='text-xs'>↗</span>
            </Button>
            <Button href='#projects' variant='ghost'>
              <span>Explore Projects</span>
              <MdArrowDownward className='text-base' />
            </Button>
          </div>

          {/* Social Icon Pills */}
          <div className='flex items-center gap-2 pt-2'>
            <a
              href={socials.github}
              target='_blank'
              rel='noreferrer'
              aria-label='GitHub Profile'
              className='p-2.5 rounded-lg bg-surface-raised border border-white/10 hover:border-primary-container hover:text-white text-text-muted transition-all'
            >
              <SiGithub size={17} />
            </a>
            <a
              href={socials.linkedin}
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn Profile'
              className='p-2.5 rounded-lg bg-surface-raised border border-white/10 hover:border-primary-container hover:text-white text-text-muted transition-all'
            >
              <FaLinkedin size={17} />
            </a>
            <a
              href={socials.emailMailto}
              aria-label='Send Email'
              className='p-2.5 rounded-lg bg-surface-raised border border-white/10 hover:border-primary-container hover:text-white text-text-muted transition-all'
            >
              <MdEmail size={18} />
            </a>
          </div>
        </div>

        {/* Right Hero Card / Status Terminal */}
        <div className='lg:col-span-5 flex flex-col gap-4'>
          <div className='rounded-2xl bg-surface-raised border border-white/10 p-6 shadow-2xl relative overflow-hidden'>
            <div className='absolute -top-12 -right-12 w-40 h-40 bg-primary-container/10 rounded-full blur-2xl pointer-events-none' />

            {/* Terminal Header */}
            <div className='flex items-center justify-between pb-4 border-b border-white/[0.08]'>
              <div className='flex items-center gap-2'>
                <span className='w-3 h-3 rounded-full bg-primary-container/80' />
                <span className='w-3 h-3 rounded-full bg-yellow-500/80' />
                <span className='w-3 h-3 rounded-full bg-emerald-500/80' />
              </div>
              <span className='font-mono text-xs text-text-muted ml-2'>
                Full Stack Engineer
              </span>
            </div>

            {/* Quick Metrics Grid */}
            <div className='grid grid-cols-2 gap-3 pt-5'>
              <div className='p-3.5 rounded-xl bg-surface-overlay border border-white/5 flex flex-col justify-between'>
                <span className='text-xs font-mono text-text-muted uppercase'>
                  Experience
                </span>
                <span className='text-2xl font-bold text-white mt-1'>
                  4+ Years
                </span>
                <span className='text-[11px] text-text-secondary mt-0.5'>
                  Frontend & Cloud
                </span>
              </div>

              <div className='p-3.5 rounded-xl bg-surface-overlay border border-white/5 flex flex-col justify-between'>
                <span className='text-xs font-mono text-text-muted uppercase'>
                  Clinician Reach
                </span>
                <span className='text-2xl font-bold text-primary mt-1'>
                  50k+
                </span>
                <span className='text-[11px] text-text-secondary mt-0.5'>
                  Healthcare users
                </span>
              </div>

              <div className='p-3.5 rounded-xl bg-surface-overlay border border-white/5 flex flex-col justify-between'>
                <span className='text-xs font-mono text-text-muted uppercase'>
                  Certification
                </span>
                <span className='text-base font-bold text-white mt-1'>
                  GCP ACE
                </span>
                <span className='text-[11px] text-text-secondary mt-0.5'>
                  Google Cloud
                </span>
              </div>

              <div className='p-3.5 rounded-xl bg-surface-overlay border border-white/5 flex flex-col justify-between'>
                <span className='text-xs font-mono text-text-muted uppercase'>
                  Latency Cut
                </span>
                <span className='text-2xl font-bold text-emerald-400 mt-1'>
                  35%
                </span>
                <span className='text-[11px] text-text-secondary mt-0.5'>
                  Chunk splitting
                </span>
              </div>
            </div>

            {/* Verified Credentials Ribbon */}
            <div className='mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-text-muted'>
              <span className='flex items-center gap-1.5'>
                <SiCredly className='text-primary text-base' />
                <span>{personal.credlyId}</span>
              </span>
              <a
                href={personal.credlyBadgeUrl}
                target='_blank'
                rel='noreferrer'
                className='text-primary hover:underline flex items-center gap-0.5'
              >
                <span>verify</span>
                <span className='text-[10px]'>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
