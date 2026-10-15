'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGooglecloud,
  SiKubernetes,
  SiTerraform,
  SiN8N,
  SiLangchain,
  SiTailwindcss,
  SiRedux,
  SiCypress,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNodedotjs,
  SiPrisma,
  SiGraphql
} from 'react-icons/si';

const renderSkillIcon = (iconId: string) => {
  const iconClass =
    'text-primary-container text-lg shrink-0 group-hover:scale-110 transition-transform duration-200';

  switch (iconId) {
    case 'typescript':
      return <SiTypescript className={iconClass} />;
    case 'react':
      return <SiReact className={iconClass} />;
    case 'nextjs':
      return <SiNextdotjs className={iconClass} />;
    case 'gcp':
      return <SiGooglecloud className={iconClass} />;
    case 'kubernetes':
      return <SiKubernetes className={iconClass} />;
    case 'terraform':
      return <SiTerraform className={iconClass} />;
    case 'n8n':
      return <SiN8N className={iconClass} />;
    case 'langchain':
      return <SiLangchain className={iconClass} />;
    case 'tailwind':
      return <SiTailwindcss className={iconClass} />;
    case 'redux':
      return <SiRedux className={iconClass} />;
    case 'cypress':
      return <SiCypress className={iconClass} />;
    case 'docker':
      return <SiDocker className={iconClass} />;
    case 'postgresql':
      return <SiPostgresql className={iconClass} />;
    case 'mongodb':
      return <SiMongodb className={iconClass} />;
    case 'redis':
      return <SiRedis className={iconClass} />;
    case 'nodejs':
      return <SiNodedotjs className={iconClass} />;
    case 'prisma':
      return <SiPrisma className={iconClass} />;
    case 'graphql':
      return <SiGraphql className={iconClass} />;
    default:
      return null;
  }
};

export const SkillsSection: React.FC = () => {
  const { skillsHeadline, skillCategories, skillsList } = PORTFOLIO_DATA;
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleMouseEnter = (key: string) => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setHoveredCategory(key);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      setHoveredCategory(null);
    }
  };

  const handleClick = (key: string) => {
    setHoveredCategory((prev) => (prev === key ? null : key));
  };

  return (
    <section
      className='max-w-[1200px] mx-auto px-5 sm:px-8 py-16 border-b border-white/[0.06]'
      id='skills'
    >
      {/* Wireframe Interlocking Circles (S2 Signature style in theme yellow #f5b301) */}
      <div className='mb-8'>
        <svg
          className='w-10 h-10 text-primary-container'
          fill='none'
          viewBox='0 0 40 40'
        >
          <circle
            className='opacity-70'
            cx='16'
            cy='20'
            r='11'
            stroke='currentColor'
            strokeWidth='1.6'
          />
          <circle
            cx='24'
            cy='20'
            r='11'
            stroke='currentColor'
            strokeWidth='1.6'
          />
        </svg>
      </div>

      {/* Top Header: Title & Meta on Left, Go-to Stack on Right (same as before) */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-12'>
        {/* Left Title & Meta Column */}
        <div className='md:col-span-4 space-y-4'>
          <h2 className='text-3xl font-bold text-white tracking-tight'>
            {skillsHeadline.title}
          </h2>
          <p className='text-text-secondary text-sm leading-relaxed'>
            {skillsHeadline.subtitle} <br />
            <span className='italic font-serif text-lg text-primary'>
              {skillsHeadline.quote}
            </span>
          </p>
        </div>

        {/* Right Content */}
        <div className='md:col-span-8'>
          <p className='text-text-secondary text-sm sm:text-base leading-relaxed'>
            My default go-to stack is{' '}
            <strong className='text-white font-medium'>Next.js</strong>{' '}
            (TypeScript &amp; Tailwind CSS) paired with{' '}
            <strong className='text-white font-medium'>Node.js</strong>{' '}
            microservices hosted on{' '}
            <strong className='text-white font-medium'>Google Cloud Run</strong>
            . I also engineer automated enterprise workflows leveraging{' '}
            <strong className='text-white font-medium'>n8n</strong>,{' '}
            <strong className='text-white font-medium'>LangChain</strong>, and{' '}
            <strong className='text-white font-medium'>Redis</strong> for
            background message dispatching.
          </p>
        </div>
      </div>

      {/* Skills Filter Row: Left is Skills ->, Right is Tabs */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 items-center mb-8'>
        <div className='md:col-span-4'>
          <h3 className='font-bold text-white text-base sm:text-lg flex items-center gap-2'>
            Skills <span>&rarr;</span>
          </h3>
        </div>
        <div className='md:col-span-8'>
          <div className='flex flex-wrap gap-2.5'>
            {skillCategories.map((cat) => {
              const isHovered = hoveredCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type='button'
                  onMouseEnter={() => handleMouseEnter(cat.key)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(cat.key)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer select-none ${
                    isHovered
                      ? 'bg-primary-container text-primary-foreground shadow-md shadow-primary-container/25'
                      : 'bg-surface-high text-zinc-300 md:hover:bg-primary-container md:hover:text-primary-foreground shadow-sm shadow-black/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Work Stack Row: Left is Work Stack ->, Right is Stacks Grid */}
      <div className='grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-10 items-start'>
        <div className='md:col-span-4'>
          <h3 className='font-bold text-white text-base sm:text-lg flex items-center gap-2 md:pt-1.5'>
            Work Stack <span>&rarr;</span>
          </h3>
        </div>
        <div className='md:col-span-8'>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6 w-full text-sm font-medium'>
            {skillsList.map((skill) => {
              const isHoverActive = hoveredCategory !== null;
              const isMatching = !isHoverActive || skill.category === hoveredCategory;
              return (
                <div
                  key={skill.name}
                  className={`flex items-center space-x-3 p-1.5 -ml-1.5 rounded-lg transition-all duration-300 ${
                    isMatching
                      ? isHoverActive
                        ? 'opacity-100 text-white'
                        : 'opacity-100 text-zinc-200 cursor-default'
                      : 'opacity-20 grayscale pointer-events-none select-none'
                  }`}
                >
                  {renderSkillIcon(skill.iconId)}
                  <span className='transition-colors'>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
