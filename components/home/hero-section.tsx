import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-28 transition-all animate-in lg:px-12 max-w-7xl'>
      <div className='flex'>
        <div className='reltive p-px overflow-hidden rounded-full bg-linear-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x group'>
          <Badge
            variant='secondary'
            className='relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-100 transition-colors duration-200'
          >
            <Sparkles className='h-6 w-6 mr-2 text-rose-600 animate-bounce' />
            <p className='text-base text-rose-600'>Powered by AI</p>
          </Badge>
        </div>
      </div>
      <h1 className='font-bold py-6 text-center'>
        Turn PDFs into sharp, easy-to-digest summaries
      </h1>
      <h2 className='text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-600'>
        Watch your document come alive with a beautiful summary reel in seconds
      </h2>
      <div>
        <Button variant='link' className='text-white'>
          <Link href='/#pricing' className='flex gap-2 items-center'>
            <span>Try InsightPDF</span>
            <ArrowRight className='animate-pulse' />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
