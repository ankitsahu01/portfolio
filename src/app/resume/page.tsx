"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import Loader from '../../components/Loader';

const Resume = dynamic(() => import('../../components/Resume/Resume'), {
  ssr: false,
  loading: () => <Loader message="Loading Resume..." />,
});

export default function Page() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return <Resume />;
}
