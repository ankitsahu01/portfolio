import { Metadata } from 'next';
import Contact from '../../components/Contact/Contact';

export const metadata: Metadata = {
  title: 'Contact | Ankit Sahu',
  description: 'Get in touch with Ankit Sahu for engineering roles, technical architecture, and GenAI pipeline consulting.',
};

export default function Page() {
  return <Contact />;
}
