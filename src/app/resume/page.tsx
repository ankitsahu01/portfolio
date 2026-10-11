"use client";
import dynamic from 'next/dynamic';

const Resume = dynamic(() => import('../../components/Resume/Resume'), {
  ssr: false,
});

export default function Page() {
  return <Resume />;
}
